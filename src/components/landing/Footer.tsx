import { Atom, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="border-t border-border/40 py-8">
            <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-2">
                    <Atom className="h-5 w-5 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} DevDNA Inc. All rights reserved.
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
