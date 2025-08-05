
import CaseStudies from "@/components/landing/CaseStudies";
import ChatbotAssistant from "@/components/landing/ChatbotAssistant";
import Features from "@/components/landing/Features";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import Security from "@/components/landing/Security";

export default function LearnMorePage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <main className="flex-grow pt-20">
        <Features />
        <CaseStudies />
        <Security />
        <ChatbotAssistant />
      </main>
      <Footer />
    </div>
  );
}
