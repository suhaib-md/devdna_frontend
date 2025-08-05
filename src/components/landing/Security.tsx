
"use client";

import { motion } from "framer-motion";
import TiltedCard from "@/components/ui/TiltedCard";
import { ShieldCheck, GitBranch, DatabaseZap, Workflow } from "lucide-react";

const securityFeatures = [
    {
        icon: <ShieldCheck className="w-7 h-7 text-cyan-400"/>,
        title: "Data Integrity First",
        description: "Project managers and developers cannot directly modify data through dashboards, ensuring data integrity.",
    },
    {
        icon: <GitBranch className="w-7 h-7 text-cyan-400"/>,
        title: "Single Source of Truth",
        description: "All modifications must be made through original sources like GitHub, JIRA, and Confluence.",
    },
    {
        icon: <DatabaseZap className="w-7 h-7 text-cyan-400"/>,
        title: "Real-time Synchronization",
        description: "DevDNA reflects changes from integrated systems, providing a unified view while preserving source authority.",
    },
    {
        icon: <Workflow className="w-7 h-7 text-cyan-400"/>,
        title: "Accuracy Optimization",
        description: "Our models learn from contextual edits in source tools, continuously improving AI analysis accuracy.",
    }
]

const Security = () => {
    return (
        <motion.section 
            id="security" 
            className="py-32 bg-neutral-950"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
        >
            <div className="container">
                <div className="grid md:grid-cols-2 gap-20 lg:gap-24 items-center">
                    <div className="text-left space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold font-headline text-white leading-tight">
                            Your Data, Secured and Unaltered
                        </h2>
                        <p className="text-lg text-neutral-400 leading-relaxed">
                            DevDNA operates on a read-only philosophy. We believe in maintaining the integrity of your source data. Our platform provides powerful insights without ever compromising the single source of truth.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
                        {securityFeatures.map((feature) => (
                           <TiltedCard key={feature.title}>
                               <div className="h-full flex flex-col items-center text-center p-6 rounded-lg bg-neutral-900/50 border border-neutral-800/50 hover:border-cyan-400/30 transition-all duration-300 hover:bg-neutral-900/70 space-y-4">
                                    <div className="flex items-center justify-center h-14 w-14 rounded-full bg-cyan-400/10 border border-cyan-400/20 mb-4">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold text-white leading-tight mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-neutral-400 leading-relaxed text-sm flex-grow">
                                        {feature.description}
                                    </p>
                                </div>
                            </TiltedCard>
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default Security;
