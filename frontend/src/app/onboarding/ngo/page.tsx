"use client";
import React, { useState } from "react";
import Dropzone from "./Dropzone";
import { Input, Group, HoverCard, Button, Text } from "@mantine/core";
import { generateUsername } from "unique-username-generator";

const page = () => {
  const [username, setUsername] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    documents: [],
  });
  const generateRandomUsername = () => {
    const randomUsername = generateUsername("", 4);
    setUsername(randomUsername);
  };
  return (
    <div className="flex flex-col gap-8 items-center p-8">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-secondaryDarkColor text-2xl font-semibold ">
          Fill the NGO details
        </h1>
      </div>
      <div className="flex flex-col gap-2 items-center px-4 py-3 rounded-lg shadow border ">
        <div className="md:w-[32rem]">
          <h3 className="text-md ">Name:</h3>
          <Input
            size="md"
            radius="md"
            placeholder="NGO Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="md:w-[32rem]">
          <h3 className="text-md ">Description:</h3>
          <Input
            size="md"
            radius="md"
            placeholder="Dewcribe your NGO"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
        </div>
        <div className="md:w-[32rem]">
          <h3 className="text-md ">NGO Authenticity Documents</h3>
          {/* Dropzone  */}
          <Dropzone />
        </div>
      </div>

  
        <Button
          variant="filled"
          color="#065471"
          size="lg"
          radius="md"
          className="transition transform"
        >
          Regsister NGO
        </Button>
      
    </div>
  );
};

export default page;