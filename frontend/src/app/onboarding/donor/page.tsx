"use client";
import React, { useState } from "react";
import Dice from "../../../../public/icons/Dice";
import { Input, Group, HoverCard, Button, Text } from "@mantine/core";
import { generateUsername } from "unique-username-generator";

const page = () => {
  const [username, setUsername] = useState("");
  const generateRandomUsername = () => {
    const randomUsername = generateUsername("", 4);
    setUsername(randomUsername);
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
        <Button variant="filled" color="#065471" size="lg" radius="md" className="transition transform">
            Continue as {username}
        </Button>
        }
    </div>
  );
};

export default page;
