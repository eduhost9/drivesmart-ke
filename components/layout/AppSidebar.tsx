"use client";

import Link from "next/link";
import { navigation } from "@/constants/navigation";

export default function AppSidebar() {
  return (
    <aside className="hidden md:flex w-72 bg-slate-900 text-white flex-col">
      <div className="p-6 border-b border-slate-800">
        <h1 className="text-2xl font-bold">
          🚗 DriveSmart
        </h1>

        <p className="text-slate-400 text-sm mt-1">
          Kenya
        </p>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="
                flex items-center gap-3
                rounded-lg
                px-4 py-3
                hover:bg-slate-800
                transition
              "
            >
              <Icon size={18} />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <div className="rounded-lg bg-slate-800 p-3">
          <p className="text-sm">
            Learning Progress
          </p>

          <p className="text-xl font-bold">
            0%
          </p>
        </div>
      </div>
    </aside>
  );
}