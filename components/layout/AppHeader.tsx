"use client";

import LogoutButton from "@/components/logout-button";

export default function AppHeader() {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6 sticky top-0 z-20">
      <div>
        <h2 className="font-bold text-lg">
          DriveSmart Kenya
        </h2>

        <p className="text-xs text-slate-500">
          Learn. Practice. Pass.
        </p>
      </div>

      <LogoutButton />
    </header>
  );
}