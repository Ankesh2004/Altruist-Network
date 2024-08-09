"use client";
import React, { useState } from "react";
import Dice from "../../../../public/icons/Dice";
import { Input, Group, HoverCard, Button, Text } from "@mantine/core";
import { generateUsername } from "unique-username-generator";
import { ethers } from "ethers";
import {abi,address} from "../../../../contractsData/donorRegistry";


const page = () => {
  const [username, setUsername] = useState("");
  const generateRandomUsername = () => {
    const randomUsername = generateUsername("", 4);
    setUsername(randomUsername);
  };
  const registerDonor = async (e: any, name: string) => {
    e.preventDefault();

    try {
      const { ethereum } = window as unknown as Window & { ethereum: any };
      if (!ethereum) {
        console.log("MetaMask not detected");
        return;
      }

      // Create a provider and signer
      const provider = new ethers.BrowserProvider(ethereum);
      const signer = await provider.getSigner();

      // Create the contract instance
      const donorRegistry = new ethers.Contract(address, abi, signer);

      // Register the donor
      await donorRegistry.registerDonor(name)
      .then((tx) => {
        console.log("Transaction hash:", tx.hash);
        console.log("Donor registered successfully!");
      })
      .catch((error) => {
        console.log("Error registering donor:", error);
      });

    } catch (error) {
      console.log("Error connecting to MetaMask", error);
    }
};

  return (
    <div className="flex flex-col gap-8 items-center">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-secondaryDarkColor text-2xl  font-semibold">
          Pick a username
        </h1>
        <p className="text-lightGray text-xs">
          <span className="text-red-500">*</span> Do not use your real name for
          privacy concerns
        </p>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <Input
          size="md"
          radius="md"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        {/* Generate a random username  */}
        <Group justify="center" onClick={generateRandomUsername}>
          <HoverCard width={200} shadow="md" openDelay={500}>
            <HoverCard.Target>
              <div className="text-secondaryColor p-1 hover:rotate-180 hover:bg-borderColor rounded-lg transition-all transform cursor-pointer">
                <Dice />
              </div>
            </HoverCard.Target>
            <HoverCard.Dropdown>
              <Text size="sm">Generate a random username.</Text>
            </HoverCard.Dropdown>
          </HoverCard>
        </Group>
      </div>

      {username !==  '' &&
        <Button variant="filled" color="#065471" size="lg" radius="md" className="transition transform"
        onClick={(e)=>registerDonor(e,username)}>
            Continue as {username}
        </Button>
        }
    </div>
  );
};

export default page;
