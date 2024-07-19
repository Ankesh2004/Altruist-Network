import HeroSection from "@/components/landing/HeroSection";
import WhyDecentralization from "@/components/landing/WhyDecentralization";
import KnowMoreHDW from "@/components/landing/KnowMoreHDW";
import OverviewCard from "@/components/landing/OverviewCard";
import { overviewCardsData } from "@/data/landing/overviewCardsData";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      {/* Hero Section  */}
      <HeroSection />
      
      {/* Why Decentralization Section  */}
      <WhyDecentralization />

      {/* KNOW MORE - How decentralization works on this platform */}
      <KnowMoreHDW />

      {/* OVERVIEW CARDS - Verify NGO and Register NGO  */}
      <section className="flex flex-wrap items-center w-full justify-around gap-4 px-4 py-12">
        {overviewCardsData.map((data, index) => (
          <OverviewCard {...data} key={index} />
        ))}
      </section>
      {/* Our Mission Section  */}
      {/* How it Works Section  */}
      {/* Our Mission Section  */}

      
    </main>
  );
}
