import { Atom, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="border-t border-neutral-800 py-12 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-neutral-800/50 border border-neutral-700/50">
                            <Atom className="h-4 w-4 text-cyan-400" />
                        </div>
                        <p className="text-sm text-neutral-400 font-medium">
                            &copy; {new Date().getFullYear()} DevDNA Inc. All rights reserved.
                        </p>
                    </div>
                    
                    <div className="flex items-center gap-6">
                        <a 
                            href="#" 
                            className="flex items-center justify-center h-10 w-10 rounded-full bg-neutral-900/50 border border-neutral-800/50 text-neutral-400 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-neutral-800/50 transition-all duration-300"
                            aria-label="Follow us on Twitter"
                        >
                            <Twitter className="h-4 w-4" />
                        </a>
                        <a 
                            href="#" 
                            className="flex items-center justify-center h-10 w-10 rounded-full bg-neutral-900/50 border border-neutral-800/50 text-neutral-400 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-neutral-800/50 transition-all duration-300"
                            aria-label="View our GitHub repository"
                        >
                            <Github className="h-4 w-4" />
                        </a>
                        <a 
                            href="#" 
                            className="flex items-center justify-center h-10 w-10 rounded-full bg-neutral-900/50 border border-neutral-800/50 text-neutral-400 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-neutral-800/50 transition-all duration-300"
                            aria-label="Connect with us on LinkedIn"
                        >
                            <Linkedin className="h-4 w-4" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;