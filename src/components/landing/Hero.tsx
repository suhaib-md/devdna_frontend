
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import DarkVeil from "@/components/ui/DarkVeil";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <DarkVeil />
        </div>
        <div className="container relative z-10 flex flex-col items-center text-center px-12">
            <h1 className="font-headline text-7xl md:text-8xl font-bold tracking-tighter !leading-tight mb-8 max-w-4xl">
                DevDNA
            </h1>
            <p className="text-sm md:text-base text-muted-foreground mb-12 max-w-2xl text-center">
                DevDNA is an intelligent AI agent that revolutionizes performance management and project allocation through automated tracking and data-driven insights.
            </p>
            <div className="flex gap-4">
                <Link href="/login">
                    <Button size="lg" className="group">
                        Get Started
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                </Link>
                <Link href="/learn">
                  <Button size="lg" variant="outline">
                      Learn More
                  </Button>
                </Link>
            </div>
        </div>
    </section>
  );
};

export default Hero;
