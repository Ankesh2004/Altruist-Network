'use client';
import {
  OverviewCardDataTypes,
} from "@/data/landing/overviewCardsData";
import { Text , Group } from "@mantine/core";
import Link from "next/link";
import Image from "next/image";

const OverviewCard = (data : OverviewCardDataTypes) => {
  return (
    <div className="rounded-lg p-4 border border-borderColor bg-secondaryDarkColor max-w-[24rem]">
        <Image
            src={data.coverImage}
            alt="Card Picture"
            width={400}
            height={200}
            className="rounded-lg"
        />

      <Group justify="space-between" mt="md" mb="xs">
        {data.heading}
      </Group>

      <Text size="sm" c="#FFEC99">
        {data.description}
      </Text>
    
    <Link href={data.refLink}>
      <button className="bg-primaryColor rounded-md w-full px-3 py-2 mt-2">
        Know More
      </button>
    </Link>
    </div>
  );
};

export default OverviewCard;
