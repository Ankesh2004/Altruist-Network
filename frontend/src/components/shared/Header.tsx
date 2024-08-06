import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logos/logo.png";
import { Button } from "@mantine/core";

const Header = () => {
  return (
    <div className="w-full h-full flex flex-row items-center justify-between p-2 shadow-xl bg-secondaryColor">
      <Link href={"/"} className="flex flex-row items-center p-2 gap-2">
        <Image src={logo} alt="Logo" width={50} height={50} />
        <h2 className="text-primaryColor text-lg font-bold">
          Altruist Network
        </h2>
      </Link>
      <Button variant="outline" color="#ffc045" size="md" radius="md">
        Connect Wallet
      </Button>
    </div>
  );
};

export default Header;
