"use client";

import { Download } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 lg:px-24 py-4 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
      <div className="flex items-center gap-3">
        {/* Official Extension Logo */}
        <img
          src="/icon128.png"
          alt="Unproductive Mode Logo"
          className="w-10 h-10 rounded-xl shadow-[0_2px_15px_rgba(249,115,22,0.4)]"
        />
        <span className="text-lg font-bold tracking-tight text-white translate-y-[1px]">
          Unproductive Mode
        </span>
      </div>
      <div className="flex items-center gap-4 sm:gap-6">
        <div className="flex items-center gap-4 sm:gap-6 text-sm font-medium text-zinc-400">
          <a
            href="https://x.com/abhijitwt"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors flex items-center gap-2"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.005 4.15H5.059z" />
            </svg>
            <span className="hidden sm:block">@abhijitwt</span>
          </a>
          <a
            href="https://github.com/Abhijit-Jha"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors flex items-center gap-2"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            <span className="hidden sm:block">Abhijit-Jha</span>
          </a>
        </div>

        <a
          href="/unproductive-mode.zip"
          download="unproductive-mode.zip"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-3 py-2 sm:px-6 sm:py-2.5 bg-zinc-900 border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/10 text-white font-medium rounded-full transition-all duration-300"
        >
          <Download className="w-4 h-4 text-orange-400" />
          <span className="hidden sm:inline text-sm">Download Extension</span>
        </a>
      </div>
    </header>
  );
}
