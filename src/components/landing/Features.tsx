
"use client";

import { motion } from "framer-motion";
import TiltedCard from "@/components/ui/TiltedCard";
import { BarChart3, UserCheck, Bot, GitMerge, Sparkles, Code } from "lucide-react";
import featuresData from "@/data/features.json";

type IconMap = {
  [key: string]: React.ReactNode;
};

const icons: IconMap = {
  BarChart3: <BarChart3 className="h-8 w-8 text-cyan-400" />,
  UserCheck: <UserCheck className="h-8 w-8 text-cyan-400" />,
  Bot: <Bot className="h-8 w-8 text-cyan-400" />,
  GitMerge: <GitMerge className="h-8 w-8 text-cyan-400" />,
  Sparkles: <Sparkles className="h-8 w-8 text-cyan-400" />,
  Code: <Code className="h-8 w-8 text-cyan-400" />,
};

const Features = () => {
  return (
    <motion.section 
      id="features" 
      className="py-24 px-4 sm:px-6 lg:px-8 xl:px-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 lg:mb-20 px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline text-white mb-6 max-w-4xl mx-auto">
            Why DevDNA?
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Discover the core functionalities that make DevDNA an indispensable tool for modern software development teams.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-16 max-w-6xl mx-auto">
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex justify-center"
            >
              <TiltedCard>
                <div className="bg-neutral-950 border border-neutral-800 group-hover:border-cyan-400/50 group-hover:bg-neutral-900 transition-all duration-300 h-full rounded-xl p-8 flex flex-col items-center text-center min-h-[280px] w-full max-w-sm mx-auto">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-cyan-400/20 to-cyan-600/10 border border-cyan-400/30 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {icons[feature.icon]}
                  </div>
                  <h3 className="text-xl lg:text-2xl font-semibold text-white leading-tight mb-4 min-h-[3.5rem] flex items-center">
                    {feature.title}
                  </h3>
                  <p className="text-base lg:text-lg text-neutral-300 leading-relaxed flex-grow">
                    {feature.description}
                  </p>
                </div>
              </TiltedCard>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Features;
