import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { BackgroundBeams } from "@/components/ui/background-beams";

const Hero = () => {
  return (
    <section className="relative h-[calc(100vh-4rem)] w-full overflow-hidden flex items-center justify-center">
        <div className="container relative z-10 flex flex-col items-center text-center p-8">
            <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter !leading-[1.1] mb-6">
                Unlock Developer Potential with <span className="text-primary">AI-Powered</span> Insights
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl">
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
        <BackgroundBeams />
    </section>
  );
};

export default Hero;
