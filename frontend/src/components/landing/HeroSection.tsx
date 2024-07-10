import Image from "next/image";
import { Button, Mark } from "@mantine/core";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="flex flex-wrap items-center w-full justify-around gap-4 px-4 py-12">
      {/* Texts  */}
      <div className="flex flex-col gap-16 lg:max-w-[60%]">
        {/* hero text  */}
        <div className="flex flex-col gap-4">
          <h1 className="sm:text-4xl text-3xl font-bold lg:text-left text-center">
            Empowering Communities Through <Mark>Decentralized</Mark> Giving
          </h1>
          <p className="sm:text-xl text-lg lg:text-left text-center">
            Our decentralized platform connects donors directly with grassroots
            organizations, ensuring your contributions have the greatest impact.
          </p>
        </div>
        {/* hero buttons  */}
        <div className="flex flex-wrap gap-4 lg:justify-start justify-center">
          <Link href="/donate">
            <Button variant="filled" color="#065471" size="lg" radius="lg">
              Donate
            </Button>
          </Link>
          <Button variant="outline" color="#065471" size="lg" radius="lg">
            Register as NGO
          </Button>
        </div>
      </div>

      {/* Image  */}
      <div className="flex justify-center">
        <Image
          src="/assets/hero.jpeg"
          alt="Logo"
          width={400}
          height={300}
          className="rounded-2xl "
        />
      </div>
    </section>
  );
};

export default HeroSection;
