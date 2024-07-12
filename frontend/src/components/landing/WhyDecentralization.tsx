import { WhyDecentralizationData } from "@/data/landing/whyDecentralizationData";
import PaperRoundRight from "../shared/PaperRoundRight";
import PaperRoundLeft from "../shared/PaperRoundLeft";

const WhyDecentralization = () => {
  return (
    <section className="flex flex-col w-full justify-around gap-4 py-12 bg-secondaryColor mb-4">
      {/* Heading  */}
      <h1 className="sm:text-4xl text-3xl font-bold text-primaryColor text-center">
        Why Decentralization Matters ?
      </h1>
      {/* Data Points  */}
      <div className="w-full flex flex-col gap-4">
        {WhyDecentralizationData.map((data, index) =>
          index % 2 === 0 ? (
            <div className="flex flex-col items-start">
              <PaperRoundRight DATA={data} key={index} />
            </div>
          ) : (
            <div className="flex flex-col items-end">
              <PaperRoundLeft DATA={data} key={index} />
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default WhyDecentralization;
