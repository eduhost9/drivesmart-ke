import {
  Route,
  TrafficCone,
} from "lucide-react";
import Link from "next/link";

const modules = [
  {
    name: "Road Signs",
    href: "/dashboard/road-signs",
    icon: TrafficCone,
    progress: "Not started",
  },
  {
    name: "Lane Discipline",
    href: "/dashboard/lane-discipline",
    icon: Route,
    progress: "Not started",
  },
];

export default function DashboardPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="text-slate-500 mt-2">
          Continue your driving lessons.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {modules.map((module) => {
          const Icon = module.icon;

          return (
            <Link
  href={module.href}
  key={module.name}
  className="
    bg-white
    rounded-2xl
    p-6
    shadow-sm
    border
    hover:shadow-lg
    hover:-translate-y-1
    transition
    flex
    flex-col
    min-h-[250px]
  "
>
             <div className="flex justify-between items-center">
  <Icon
    size={28}
    className="text-blue-600"
  />

  <span className="text-sm text-slate-500">
    {module.progress}
  </span>
</div>

<h2 className="mt-5 text-xl font-semibold">
  {module.name}
</h2>

<p className="mt-3 text-slate-500 text-sm flex-1">
  Start learning and track progress.
</p>

<span
    className="
      mt-5
      w-full
      bg-blue-600
      hover:bg-blue-700
      text-white
      text-center
      px-5
      py-3
      rounded-xl
    font-medium
    transition
  "
>
  Open Module
 </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}