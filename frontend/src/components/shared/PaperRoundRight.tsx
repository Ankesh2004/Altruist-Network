import { WhyDecentralizationDataTypes } from "@/data/landing/whyDecentralizationData";
import Image from "next/image";

const PaperRoundLeft = ({ DATA }: { DATA: WhyDecentralizationDataTypes }) => {
  return (
    <div className="flex flex-row gap-4 items-center justify-start">
      <div className="p-4 rounded-r-full text-left shadow-md shadow-primaryColor bg-primaryColor w-full lg:w-[80%]">
        <h2 className="text-xl font-bold text-secondaryDarkColor">
          {DATA.heading}
        </h2>
        <div className="max-w-[92%]">
          {DATA.points.map((point, index) => (
            <div key={index} className="p-2 rounded-lg ">
              <h3 className="font-bold">{point.heading}</h3>
              <p className="text-sm">{point.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="shadow-s hidden lg:block">
        {DATA.image && (
          <Image
            src={DATA.image}
            alt="Logo"
            width={200}
            className="rounded-2xl "
          />
        )}
      </div>
    </div>
  );
};

export default PaperRoundLeft;
