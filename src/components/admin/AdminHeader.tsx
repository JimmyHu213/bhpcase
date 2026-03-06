"use client";

import { useRouter } from "next/navigation";
import { LogOut, Shield } from "lucide-react";

export default function AdminHeader() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin");
  };

  return (
    <header className="bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <Shield className="text-accent" size={20} />
          <span className="font-serif font-bold text-primary text-sm">
            ADMIN DASHBOARD
          </span>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-sm text-slate-body hover:text-primary transition-colors"
        >
          <LogOut size={16} /> Logout
        </button>
      </div>
    </header>
  );
}
