"use client";
import { AppShell } from "@mantine/core";
import "./globals.css";
// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider,Button } from "@mantine/core";
import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";

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
      <body className="custom-scrollbar">
        <MantineProvider defaultColorScheme="light">
          <AppShell
            header={{ height: 60 }}
            footer={{ height: 150 }}
            navbar={{
              width: 240,
              breakpoint: "sm",
            }}
          >
            <AppShell.Header>
              <Header />
            </AppShell.Header>
                
            <AppShell.Navbar className="p-2" h="calc(100vh - var(--app-shell-header-height, 0px))">
              <Navbar/>
            </AppShell.Navbar>

            <AppShell.Main h="calc(100vh - var(--app-shell-header-height, 0px))">
              <div className="p-4">
                {children}
              </div>
            </AppShell.Main>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
