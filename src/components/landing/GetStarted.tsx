"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const GetStarted = () => {
    return (
        <motion.section 
            id="get-started" 
            className="py-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
        >
            <div className="container text-center">
                <h2 className="text-3xl md:text-4xl font-bold font-headline text-white">Ready to Revolutionize Your Workflow?</h2>
                <p className="text-lg text-neutral-400 mt-4 max-w-3xl mx-auto">
                    Unlock the full potential of your development team with data-driven insights.
                </p>
                <div className="mt-8">
                    <Link href="/login">
                        <Button size="lg" className="group">
                            Get Started for Free
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </div>
            </div>
        </motion.section>
    );
}

export default GetStarted;
