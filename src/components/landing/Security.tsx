"use client";

import { ShieldCheck, GitBranch, DatabaseZap, Workflow } from "lucide-react";
import { motion } from "framer-motion";

const securityFeatures = [
    {
        icon: <ShieldCheck className="w-6 h-6 text-cyan-400"/>,
        title: "Data Integrity First",
        description: "Project managers and developers cannot directly modify data through dashboards, ensuring data integrity."
    },
    {
        icon: <GitBranch className="w-6 h-6 text-cyan-400"/>,
        title: "Single Source of Truth",
        description: "All modifications must be made through original sources like GitHub, JIRA, and Confluence."
    },
    {
        icon: <DatabaseZap className="w-6 h-6 text-cyan-400"/>,
        title: "Real-time Synchronization",
        description: "DevDNA reflects changes from integrated systems, providing a unified view while preserving source authority."
    },
    {
        icon: <Workflow className="w-6 h-6 text-cyan-400"/>,
        title: "Accuracy Optimization",
        description: "Our models learn from contextual edits in source tools, continuously improving AI analysis accuracy."
    }
]

const Security = () => {
    return (
        <motion.section 
            id="security" 
            className="py-24 bg-neutral-950"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
        >
            <div className="container grid md:grid-cols-2 gap-16 items-center">
                <div className="text-left">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline text-white">Your Data, Secured and Unaltered</h2>
                    <p className="text-lg text-neutral-400 mt-4">
                        DevDNA operates on a read-only philosophy. We believe in maintaining the integrity of your source data. Our platform provides powerful insights without ever compromising the single source of truth.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {securityFeatures.map((feature) => (
                        <div key={feature.title} className="flex items-start gap-4">
                            <div className="mt-1 flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-cyan-400/10">
                                {feature.icon}
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                                <p className="text-neutral-400 mt-1">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}

export default Security;
