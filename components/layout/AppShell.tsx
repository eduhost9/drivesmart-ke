import AppSidebar from "./AppSidebar";
import AppHeader from "./AppHeader";

export default function AppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-slate-100">
      <AppSidebar />

      <div className="flex-1 flex flex-col">
        <AppHeader />

        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
