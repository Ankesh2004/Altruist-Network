"use client";
import React, { useState } from "react";
import { Progress } from "@mantine/core";
import Image from "next/image";
import overviewRegisterCampaign from "../../../../../public/assets/overviewRegisterCampaign.jpeg";
import Live from "../../../../components/shared/Live";
import { Button } from "@mantine/core";
import ReadMore from "@/components/shared/ReadMore";
import PDFList from "@/components/shared/PDFList";

const dummyText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, facilis praesentium, assumenda ratione, molestias explicabo officia nesciunt debitis quaerat asperiores maxime aut. Dolore sapiente, cum nobis fugiat in suscipit deleniti."

type pageProps = {
  params: {
    campaignId: string;
  };
};

const page = ({ params }: pageProps) => {
  const [userRole, setUserRole] = useState("NGO");
  return (
    <div>
      {/* Campaign Name and Id  */}
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-3xl  font-semibold ">Campaign Name</h1>
        <h3 className="text-secondaryText font-semibold">
          Campaign ID: #{params.campaignId}
        </h3>
      </div>

      <div className="flex lg:flex-row flex-col justify-start gap-4 w-full p-2">
        {/* Images  */}
        <div className="flex flex-row justify-center">
          <Image
            src={overviewRegisterCampaign}
            width={400}
            height={400}
            alt="campaignImage"
          />
        </div>

        {/* Details*/}
        <div className="px-2 flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-2 items-center">
            <div className="flex flex-row gap-2 items-center">
              <h2 className="font-semibold text-lg">Amount Raised:</h2>
              <p className="text-secondaryText font-semibold">Amount/ Target</p>
            </div>
            <Progress
              radius="xl"
              size="xl"
              className="w-[80%]"
              value={50}
              animated
            />
          </div>

          <p className="flex flex-row gap-2 items-center">
            <div>
              <Live />
            </div>
            <p className="text-secondaryText">Live Since : 10th May, 2024</p>
          </p>
          <div className="flex flex-col gap-1">
          <p>Started by : Campaigner Name</p>
          <p>Category : Health</p>
          </div>
          <Button
            variant="filled"
            color="#065471"
            size="lg"
            radius="lg"
            w="50%"
            className="items-center"
          >
            {userRole === "NGO" ? <p>Edit</p> : <p>Donate</p>}
          </Button>
        </div>
      </div>

      {/* Description  */}
      <ReadMore text={dummyText} maxLength={150}/>
    </div>
  );
};

export default page;
