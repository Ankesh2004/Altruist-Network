import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logos/logo.png";
import { Button } from "@mantine/core";
import { ethers,Contract } from "ethers";
import {address as donorRegistryAddress} from "../../../contractsData/donorRegistry";
import {abi as donorRegistryAbi} from "../../../contractsData/donorRegistry";

function generateLoginMessage(account: string) {
  return `Login to the NGO Donation Platform at ${new Date().toLocaleString()} with address: ${account}`;
}
async function getDonorDetails(account: string) {
  try {
    const { ethereum } = window as unknown as Window & { ethereum: any };
    if (!ethereum) {
      console.log("MetaMask not detected");
      return;
    }

    const provider = new ethers.BrowserProvider(ethereum);
    const signer = await provider.getSigner();
    const donorRegistry = new Contract(donorRegistryAddress, donorRegistryAbi, signer);
    console.log('Donor Registry:', donorRegistry);

    // Check if the account is registered
    console.log(`Checking registration status for account: ${account}`);
    const isRegistered = await donorRegistry.isRegisteredDonor(account);
    console.log(`isRegistered: ${isRegistered}`);
    if (!isRegistered) {
      console.log("Account is not registered");
      return;
    }
    console.log('User is registered');

    // Get donor details
    const donorDetails = await donorRegistry.getDonorDetails(account);
    console.log('Raw donor details:', donorDetails);

    // Parse the donor details
    const parsedDonorDetails = {
      name: donorDetails[0],
      donorAddress: donorDetails[1],
      totalDonatedAmount: donorDetails[2].toString()
    };

    if(parsedDonorDetails){
      sessionStorage.setItem('donorDetails', JSON.stringify(parsedDonorDetails));
    }

    console.log('Parsed donor details:', parsedDonorDetails);
    return parsedDonorDetails;
  } catch (e) {
    console.error('Error in getDonorDetails:', e);
    throw e;
  }
}

function loadUserSession() {
  const storedDonorDetails = sessionStorage.getItem('donorDetails');
  if (storedDonorDetails) {
    const donorDetails = JSON.parse(storedDonorDetails);
    console.log("Restored donor details from session:", donorDetails);
    // Use the donor details as needed
  }
}



async function requestSignature(account: string, message: string) {
  try {
    const { ethereum } = window as unknown as Window & { ethereum: any };
    if (!ethereum) {
      console.log("MetaMask not detected");
      return;
    }
    const signature = await ethereum.request({
      method: "personal_sign",
      params: [message, account],
    });
    console.log("Signature:", signature);
    return signature;
  } catch (error) {
    console.error("Signature request failed", error);
  }
}

async function verifySignature(account: string, message: string, signature: string) {
  try {
    const recoveredAddress = ethers.verifyMessage(message, signature);
    console.log("Recovered address:", recoveredAddress);
    console.log("Logged in address:", account);
    if (recoveredAddress.toLowerCase() !== account.toLowerCase()) {
      console.log("Signature verification failed");
      return false;
    } else {
      console.log("Signature verified");
      return true;
    }
  } catch (error) {
    console.error("Signature verification failed", error);
    return false;
  }
}

const Header = () => {
  useEffect(() => {
    loadUserSession();
  }, []);
  async function handleLogin() {
    try {
      const { ethereum } = window as unknown as Window & { ethereum: any };
      if (!ethereum) {
        console.log("MetaMask not detected");
        return;
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      const account = accounts[0];

      const message = generateLoginMessage(account);
      const signature = await requestSignature(account, message);

      if (signature) {
        const isVerified = await verifySignature(account, message, signature);
        if (isVerified) {
          console.log("User logged in successfully");
          // Proceed with login logic, e.g., send data to the backend
          console.log(account);
          const donorDetails = await getDonorDetails(account);
          console.log("Donor details:", donorDetails);
        }
      }
    } catch (error) {
      console.error("Login process failed", error);
    }
  }

  return (
    <div className="w-full h-full flex flex-row items-center justify-between p-2 shadow-xl bg-secondaryColor">
      <Link href={"/"} className="flex flex-row items-center p-2 gap-2">
        <Image src={logo} alt="Logo" width={50} height={50} />
        <h2 className="text-primaryColor text-lg font-bold">Altruist Network</h2>
      </Link>
      <Button
        variant="outline"
        color="#ffc045"
        size="md"
        radius="md"
        onClick={handleLogin}
      >
        Connect Wallet
      </Button>
    </div>
  );
};

export default Header;
