import Image from "next/image";
import { Button } from "@mantine/core";
export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section  */}
      <section className="flex flex-wrap items-center w-full rounded-lg border justify-around gap-4 px-4 py-12">
        {/* Texts  */}
        <div className="flex flex-col gap-16 lg:max-w-[60%]">
          {/* hero text  */}
          <div className="flex flex-col gap-2">
            <h1 className="sm:text-4xl text-3xl font-bold lg:text-left text-center">
              Empowering Communities Through Decentralized Giving
            </h1>
            <p className="sm:text-xl text-lg lg:text-left text-center">
              Our decentralized platform connects donors directly with
              grassroots organizations, ensuring your contributions have the
              greatest impact.
            </p>
          </div>
          {/* hero buttons  */}
          <div className="flex flex-wrap gap-4 lg:justify-start justify-center">
          <Button variant="filled" color="#065471" size="lg" radius="lg">Donate</Button>
          <Button variant="outline" color="#065471" size="lg" radius="lg">Register as NGO</Button>
          </div>
        </div>

        {/* Image  */}
        <div className="flex justify-center">
          <Image src="/logos/logo.png" alt="Logo" width={300} height={300} />
        </div>
      </section>
    </main>
  );
}
