"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import LogoutButton from "@/components/logout-button";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        router.push("/login");
      }
    };

    checkUser();
  }, [router]);

  return (
    <div className="p-8">
      <LogoutButton />

      <h1 className="text-4xl font-bold mb-6">
        DriveSmart Kenya
      </h1>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="border rounded-lg p-6">
          Road Signs
        </div>

        <div className="border rounded-lg p-6">
          Lane Discipline
        </div>

        <div className="border rounded-lg p-6">
          Roundabouts
        </div>

        <div className="border rounded-lg p-6">
          Parking
        </div>

        <div className="border rounded-lg p-6">
          Highway Driving
        </div>

        <div className="border rounded-lg p-6">
          Mock Tests
        </div>
      </div>
    </div>
  );
}