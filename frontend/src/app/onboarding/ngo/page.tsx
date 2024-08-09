"use client";
import React, { useState } from "react";
import Dropzone from "./Dropzone";
import { Input, Group, HoverCard, Button, Text } from "@mantine/core";
import { generateUsername } from "unique-username-generator";
import * as Delegation from '@web3-storage/w3up-client/delegation'
import * as Client from '@web3-storage/w3up-client'

async function setupClient() {
  const client = await Client.create()
  
  const keyURL = client.agent.did();
  const apiUrl = `http://localhost:4001/api/w3up-delegation/${keyURL}`
  
  try {
    const response = await fetch(apiUrl)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    console.log("Response headers:", response.headers);
    
    // Check if the response is Base64 encoded
    const contentType = response.headers.get("Content-Type");
    let arrayBuffer;
    
    if (contentType === "application/base64") {
      const base64 = await response.text();
      arrayBuffer = Uint8Array.from(atob(base64), c => c.charCodeAt(0)).buffer;
    } else {
      arrayBuffer = await response.arrayBuffer();
    }
    
    console.log("Received data length:", arrayBuffer.byteLength);
    
    const delegation = await Delegation.extract(new Uint8Array(arrayBuffer))
    
    if (!delegation.ok) {
      throw new Error('Failed to extract delegation', { cause: delegation.error })
    }
    
    const space = await client.addSpace(delegation.ok)
    await client.setCurrentSpace(space.did())
    
    console.log("Space:", space)
    return client
  } catch (error) {
    console.error("Error in setupClient:", error);
    throw error;
  }
}

async function uploadFile(file:File) {
  const client = await setupClient()
  
  try {
    const cid = await client.uploadFile(file);
    console.log(`File uploaded with CID: ${cid}`)
    return cid
  } catch (error) {
    console.error('Error uploading file:', error)
    throw error
  }
}

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
          {/* <Dropzone /> */}
          <input type="file" onChange={(e) => {
            const file = e.target.files?.[0]
            if (file) {
              console.log('Uploading file:', file);
              uploadFile(file)
            }
          }} />
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