
import CaseStudies from "@/components/landing/CaseStudies";
import Features from "@/components/landing/Features";
import Footer from "@/components/landing/Footer";
import GetStarted from "@/components/landing/GetStarted";
import Header from "@/components/landing/Header";
import Security from "@/components/landing/Security";
import LightRays from "@/components/ui/LightRays";

export default function LearnMorePage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <LightRays
        raysOrigin="top-center"
        raysColor="#00ffff"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={false}
        mouseInfluence={0.0}
        noiseAmount={0.1}
        distortion={0.05}
      />
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
