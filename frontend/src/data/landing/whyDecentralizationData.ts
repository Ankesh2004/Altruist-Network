import why1 from "../../../public/assets/why1.jpeg"
import why2 from "../../../public/assets/why2.jpeg"
import why3 from "../../../public/assets/why3.jpeg"
import type { StaticImageData } from 'next/image';

export type WhyDecentralizationDataTypes = {
    heading: string;
    points: {
      heading: string;
      text: string;
    }[];
    image: StaticImageData;
};
export const WhyDecentralizationData = [
    {
      heading: "Transparency",
      points: [
        {
          heading: "Immutable Records",
          text: "All transactions and documents related to NGOs are stored on the blockchain, making them immutable and publicly accessible. This ensures that donors can always verify the authenticity and history of any NGO."
        },
        {
          heading: "Public Access",
          text: "By storing documents on IPFS and recording their hashes on the blockchain, any user can access and verify these documents at any time, promoting an open and transparent system."
        }
      ],
      image:why1
    },
    {
      heading: "Security",
      points: [
        {
          heading: "Tamper-Proof",
          text: "Data stored on the blockchain cannot be altered or deleted, ensuring the integrity of NGO documents and donation records. This protects against unauthorized changes and fraud."
        },
        {
          heading: "Decentralized Network",
          text: "Unlike centralized systems where a single point of failure can lead to security breaches, a decentralized network distributes data across multiple nodes, reducing the risk of hacks and data loss."
        }
      ],
      image:why2
    },
    {
      heading: "Trust",
      points: [
        {
          heading: "Community Governance",
          text: "Donors participate in voting for trusted NGOs, creating a community-driven trust system. This decentralized voting process ensures that no single entity can manipulate the trust ratings of NGOs."
        },
        {
          heading: "Accountability",
          text: "NGOs are accountable to the community, as their documents and impact reports are publicly accessible and verifiable. This holds NGOs responsible for their actions and ensures they adhere to their mission statements."
        }
      ],
      image:why3
    }
  ];