
"use client";

import { motion } from "framer-motion";
import TiltedCard from "@/components/ui/TiltedCard";
import { BarChart3, UserCheck, Bot, GitMerge, Sparkles, Code } from "lucide-react";

const features = [
  {
    icon: <BarChart3 className="h-8 w-8 text-cyan-400" />,
    title: "Automated Performance Tracking",
    description: "Eliminates manual reporting with comprehensive activity visibility from integrated platforms.",
    imageSrc: "https://placehold.co/300x300.png",
    dataAiHint: "chart performance",
  },
  {
    icon: <UserCheck className="h-8 w-8 text-cyan-400" />,
    title: "Intelligent Developer Profiling",
    description: "Creates detailed skill profiles based on actual code contributions and work patterns.",
    imageSrc: "https://placehold.co/300x300.png",
    dataAiHint: "developer profile",
  },
  {
    icon: <Bot className="h-8 w-8 text-cyan-400" />,
    title: "Data-Driven Project Management",
    description: "Enables objective decision-making for project assignments and resource allocation.",
    imageSrc: "https://placehold.co/300x300.png",
    dataAiHint: "dashboard project",
  },
  {
    icon: <GitMerge className="h-8 w-8 text-cyan-400" />,
    title: "Seamless Integration",
    description: "Works with your existing tools like GitHub, JIRA, and Confluence without disrupting workflows.",
    imageSrc: "https://placehold.co/300x300.png",
    dataAiHint: "code integration",
  },
  {
    icon: <Sparkles className="h-8 w-8 text-cyan-400" />,
    title: "AI-Powered Insights",
    description: "Provides actionable recommendations through advanced analytics and natural language processing.",
    imageSrc: "https://placehold.co/300x300.png",
    dataAiHint: "abstract AI",
  },
  {
    icon: <Code className="h-8 w-8 text-cyan-400" />,
    title: "Continuous Learning Tracking",
    description: "Monitors skill development and adaptation to new technologies over time.",
    imageSrc: "https://placehold.co/300x300.png",
    dataAiHint: "learning code",
  },
];

const Features = () => {
  return (
    <motion.section 
      id="features" 
      className="py-32 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-white mb-6">Why DevDNA?</h2>
          <p className="text-lg text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Discover the core functionalities that make DevDNA an indispensable tool for modern software development teams.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div key={index} className="bg-neutral-950 border border-neutral-800 hover:border-cyan-400/50 hover:bg-neutral-900 transition-all duration-300 transform hover:-translate-y-1 group h-full rounded-lg p-6 flex flex-col items-center text-center">
              <TiltedCard
                imageSrc={feature.imageSrc}
                altText={feature.title}
                captionText={feature.title}
                containerHeight="250px"
                imageHeight="250px"
                imageWidth="250px"
                displayOverlayContent={true}
                data-ai-hint={feature.dataAiHint}
                overlayContent={
                  <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6 rounded-[15px]">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-cyan-400/10 border border-cyan-400/20 mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white leading-tight mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-base text-neutral-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                }
              />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Features;
