import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <main className="flex-grow">
        <Hero />
      </main>
    </div>
  );
}
