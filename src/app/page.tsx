import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import CaseStudies from "@/components/landing/CaseStudies";
import Security from "@/components/landing/Security";
import ChatbotAssistant from "@/components/landing/ChatbotAssistant";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <CaseStudies />
        <Security />
        <ChatbotAssistant />
      </main>
      <Footer />
    </div>
  );
}
