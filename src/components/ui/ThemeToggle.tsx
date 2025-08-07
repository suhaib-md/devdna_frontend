"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <div className="flex items-center">
      <button
        onClick={toggleTheme}
        className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-neutral-200 dark:bg-neutral-700 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black"
        role="switch"
        aria-checked={isDark}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`
            ${isDark ? 'translate-x-5' : 'translate-x-0'}
            pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white dark:bg-neutral-900 shadow ring-0 transition duration-200 ease-in-out
          `}
        >
          <span
            className={`
              ${isDark ? 'opacity-0 duration-100 ease-out' : 'opacity-100 duration-200 ease-in'}
              absolute inset-0 flex h-full w-full items-center justify-center transition-opacity
            `}
            aria-hidden="true"
          >
            <Sun className="h-3 w-3 text-neutral-800" />
          </span>
          <span
            className={`
              ${isDark ? 'opacity-100 duration-200 ease-in' : 'opacity-0 duration-100 ease-out'}
              absolute inset-0 flex h-full w-full items-center justify-center transition-opacity
            `}
            aria-hidden="true"
          >
            <Moon className="h-3 w-3 text-primary" />
          </span>
        </span>
      </button>
    </div>
  );
}
