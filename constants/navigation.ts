import {
  LayoutDashboard,
  TrafficCone,
  Route,
  CircleDot,
  Car,
  Settings,
} from "lucide-react";

export const navigation = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Road Signs",
    href: "/dashboard/road-signs",
    icon: TrafficCone,
  },
  {
    title: "Lane Discipline",
    href: "/dashboard/lane-discipline",
    icon: Route,
  },
  {
    title: "Roundabouts",
    href: "/dashboard/roundabouts",
    icon: CircleDot,
  },
  {
    title: "Parking",
    href: "/dashboard/parking",
    icon: Car,
  },
  {
    title: "Mock Tests",
    href: "/dashboard/mock-tests",
    icon: Settings,
  },
];