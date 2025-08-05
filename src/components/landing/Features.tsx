"use client";

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Code, UserCheck, BarChart3, GitMerge, Sparkles, Bot } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <BarChart3 className="h-8 w-8 text-cyan-400" />,
    title: "Automated Performance Tracking",
    description: "Eliminates manual reporting with comprehensive activity visibility from integrated platforms.",
  },
  {
    icon: <UserCheck className="h-8 w-8 text-cyan-400" />,
    title: "Intelligent Developer Profiling",
    description: "Creates detailed skill profiles based on actual code contributions and work patterns.",
  },
  {
    icon: <Bot className="h-8 w-8 text-cyan-400" />,
    title: "Data-Driven Project Management",
    description: "Enables objective decision-making for project assignments and resource allocation.",
  },
  {
    icon: <GitMerge className="h-8 w-8 text-cyan-400" />,
    title: "Seamless Integration",
    description: "Works with your existing tools like GitHub, JIRA, and Confluence without disrupting workflows.",
  },
  {
    icon: <Sparkles className="h-8 w-8 text-cyan-400" />,
    title: "AI-Powered Insights",
    description: "Provides actionable recommendations through advanced analytics and natural language processing.",
  },
  {
    icon: <Code className="h-8 w-8 text-cyan-400" />,
    title: "Continuous Learning Tracking",
    description: "Monitors skill development and adaptation to new technologies over time.",
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
            <Card 
              key={index} 
              className="bg-neutral-950 border-neutral-800 hover:border-cyan-400/50 hover:bg-neutral-900 transition-all duration-300 transform hover:-translate-y-1 group h-full"
            >
              <CardHeader className="p-8 flex flex-col items-center text-center space-y-6">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-cyan-400/10 border border-cyan-400/20 group-hover:scale-110 transition-transform duration-300 mb-2">
                  {feature.icon}
                </div>
                
                <div className="space-y-4">
                  <CardTitle className="text-xl font-semibold text-white leading-tight">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-base text-neutral-400 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Features;