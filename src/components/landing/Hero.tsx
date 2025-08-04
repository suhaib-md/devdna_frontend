import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-transparent to-background opacity-50"></div>
        <div className="container relative z-10 grid md:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col items-start text-left">
                <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter !leading-[1.1] mb-6">
                    Unlock Developer Potential with <span className="text-primary">AI-Powered</span> Insights
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl">
                    DevDNA is an intelligent AI agent that revolutionizes performance management and project allocation through automated tracking and data-driven insights.
                </p>
                <div className="flex gap-4">
                    <Button size="lg" className="group">
                        Request a Demo
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button size="lg" variant="outline">
                        Learn More
                    </Button>
                </div>
            </div>
            <div className="relative flex justify-center items-center">
                <div className="absolute w-full max-w-md h-full bg-accent/20 blur-3xl rounded-full"></div>
                <Image
                    src="https://placehold.co/600x600.png"
                    alt="3D DNA Strand"
                    width={600}
                    height={600}
                    data-ai-hint="dna abstract"
                    className="relative z-10 animate-float drop-shadow-[0_0_25px_hsl(var(--primary)/0.5)]"
                />
            </div>
        </div>
    </section>
  );
};

export default Hero;
