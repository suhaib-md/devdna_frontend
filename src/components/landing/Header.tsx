import { Button } from "@/components/ui/button";
import { Atom } from "lucide-react";

const Header = () => {
  return (
    <header className="absolute top-0 z-50 w-full bg-transparent p-4">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <Atom className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">DevDNA</span>
        </a>
        <Button>Get Started</Button>
      </div>
    </header>
  );
};

export default Header;
