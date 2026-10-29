import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-5xl font-bold">
        DriveSmart Kenya
      </h1>

      <p className="text-muted-foreground">
        Learn Driving Rules. Practice.
        Pass Your Driving Tests.
      </p>

      <div className="flex gap-4">
        <Link href="/register">
          Get Started
        </Link>

        <Link href="/login">
          Login
        </Link>
      </div>
    </main>
  );
}