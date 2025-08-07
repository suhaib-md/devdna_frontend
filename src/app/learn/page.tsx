
import CaseStudies from "@/components/landing/CaseStudies";
import Features from "@/components/landing/Features";
import Footer from "@/components/landing/Footer";
import GetStarted from "@/components/landing/GetStarted";
import Header from "@/components/landing/Header";
import Security from "@/components/landing/Security";
import DarkVeil from "@/components/ui/DarkVeil";

export default function LearnMorePage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <div className="absolute inset-0 z-0 h-screen">
          <DarkVeil />
      </div>
      <div className="relative z-10">
        <Header />
        <main className="flex-grow pt-20">
          <Features />
          <CaseStudies />
          <Security />
          <GetStarted />
        </main>
        <Footer />
      </div>
    </div>
  );
}
