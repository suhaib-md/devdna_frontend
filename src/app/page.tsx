import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Footer from "@/components/landing/Footer";
import Features from "@/components/landing/Features";
import Security from "@/components/landing/Security";
import CaseStudies from "@/components/landing/CaseStudies";
import ChatbotAssistant from "@/components/landing/ChatbotAssistant";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <Hero />
        <Features />
        <CaseStudies />
        <ChatbotAssistant />
        <Security />
      </main>
      <Footer />
    </div>
  );
}
