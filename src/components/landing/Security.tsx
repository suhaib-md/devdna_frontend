
"use client";

import { motion } from "framer-motion";
import TiltedCard from "@/components/ui/TiltedCard";
import { ShieldCheck, GitBranch, DatabaseZap, Workflow } from "lucide-react";
import securityFeaturesData from "@/data/security-features.json";

type IconMap = {
    [key: string]: React.ReactNode;
};

const icons: IconMap = {
    ShieldCheck: <ShieldCheck className="w-8 h-8 text-foreground"/>,
    GitBranch: <GitBranch className="w-8 h-8 text-foreground"/>,
    DatabaseZap: <DatabaseZap className="w-8 h-8 text-foreground"/>,
    Workflow: <Workflow className="w-8 h-8 text-foreground"/>,
};

const Security = () => {
    return (
        <motion.section 
            id="security" 
            className="py-24 lg:py-32 bg-neutral-950 px-4 sm:px-6 lg:px-8 xl:px-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
        >
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 xl:gap-24 items-center">
                    <motion.div 
                        className="text-left space-y-8 px-4 lg:px-0"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline text-white leading-tight max-w-lg">
                            Your Data, Secured and Unaltered
                        </h2>
                        <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-2xl">
                            DevDNA operates on a read-only philosophy. We believe in maintaining the integrity of your source data. Our platform provides powerful insights without ever compromising the single source of truth.
                        </p>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 max-w-2xl mx-auto lg:mx-0">
                        {securityFeaturesData.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="flex justify-center"
                            >
                                <TiltedCard>
                                    <div className="h-full flex flex-col items-center text-center p-8 rounded-xl bg-neutral-900/50 border border-neutral-800/50 hover:border-primary/30 transition-all duration-300 hover:bg-neutral-900/70 min-h-[260px] w-full max-w-xs mx-auto">
                                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 mb-6 group-hover:scale-110 transition-transform duration-300">
                                            {icons[feature.icon]}
                                        </div>
                                        <h3 className="text-lg lg:text-xl font-semibold text-white leading-tight mb-4 min-h-[2.5rem] flex items-center">
                                            {feature.title}
                                        </h3>
                                        <p className="text-neutral-400 leading-relaxed text-base flex-grow">
                                            {feature.description}
                                        </p>
                                    </div>
                                </TiltedCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default Security;
