import HeroSection from "@/components/landing/HeroSection";
import WhyDecentralization from "@/components/landing/WhyDecentralization";
import VerifyNGO from "../components/landing/VerifyNGO";
import KnowMoreHDW from "@/components/landing/KnowMoreHDW";
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      {/* Hero Section  */}
      <HeroSection />
      
      {/* Why Decentralization Section  */}
      <WhyDecentralization />

      {/* KNOW MORE - How decentralization works on this platform */}
      <KnowMoreHDW />

      {/* Verify NGO Section  */}
      <VerifyNGO />
      {/* Our Mission Section  */}
      {/* How it Works Section  */}
      {/* Our Mission Section  */}

      
    </main>
  );
}
