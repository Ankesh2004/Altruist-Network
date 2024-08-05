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
    <div className="flex flex-col gap-8 items-center p-8">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-secondaryDarkColor text-2xl  font-semibold">
          Fill the NGO details
        </h1>
        <p className="text-lightGray text-xs">
          <span className="text-red-500"></span> Do not use your real name for
          privacy concerns
        </p>
      </div>
      <div className="flex flex-col gap-2 items-center px-4 py-3 rounded-lg shadow bg-green-400">
        <div>
          <h3 className="text-lg font-semibold">Name:</h3>
          <Input
            size="md"
            radius="md"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold">Description:</h3>
          <Input
            size="md"
            radius="md"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold">NGO Authenticity Documents</h3>
          {/* Dropzone  */}
        </div>
      </div>

      {username !== "" && (
        <Button
          variant="filled"
          color="#065471"
          size="lg"
          radius="md"
          className="transition transform"
        >
          Continue as {username}
        </Button>
      )}
    </div>
  );
};

export default page;