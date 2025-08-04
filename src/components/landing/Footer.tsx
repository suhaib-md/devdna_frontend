import { Atom, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="border-t border-neutral-800 py-8 bg-black">
            <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-2">
                    <Atom className="h-5 w-5 text-neutral-500" />
                    <p className="text-sm text-neutral-500">
                        &copy; {new Date().getFullYear()} DevDNA Inc. All rights reserved.
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <a href="#" className="text-neutral-500 hover:text-white transition-colors">
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                    </a>
                    <a href="#" className="text-neutral-500 hover:text-white transition-colors">
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                    </a>
                    <a href="#" className="text-neutral-500 hover:text-white transition-colors">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
