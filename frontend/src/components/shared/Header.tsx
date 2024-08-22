import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logos/logo.png";
import { Button } from "@mantine/core";
import { ethers } from "ethers";

function generateLoginMessage(account: string) {
  return `Login to the NGO Donation Platform at ${new Date().toLocaleString()} with address: ${account}`;
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
