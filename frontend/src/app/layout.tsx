"use client";
import { AppShell } from "@mantine/core";
import "./globals.css";
// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider,Button } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logos/logo.png";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider defaultColorScheme="light">
          <AppShell
            header={{ height: 75 }}
            footer={{ height: 150 }}
          >
            <AppShell.Header>
              <div className="w-full h-full flex flex-row items-center justify-between p-4 shadow-xl bg-secondaryColor">
                <Link href={"/"} className="flex flex-row items-center p-2 gap-2">
                  <Image src={logo} alt="Logo" width={50} height={50} />
                  <h2 className="text-primaryColor text-lg font-bold">
                    Altruist Network
                  </h2>
                </Link>
                <Button variant="outline" color="#ffc045" size="md" radius="md" >Connect Wallet</Button>
              </div>
              
            </AppShell.Header>

            <AppShell.Main>{children}</AppShell.Main>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
