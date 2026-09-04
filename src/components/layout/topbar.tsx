"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Topbar() {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("payflow_user");

    if (user) {
      setEmail(user);
    }
  }, []);

  function logout() {
    localStorage.removeItem("payflow_logged_in");
    localStorage.removeItem("payflow_user");
    localStorage.removeItem("payflow_name");

    router.replace("/login");
  }

  function openProfile() {
    setOpen(false);
    router.push("/profile");
  }

  const initials =
    email
      .split("@")[0]
      .split(/[.\s_-]/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join("") || "U";

  return (
    <header className="fixed left-60 right-0 top-0 z-10 flex h-16 items-center justify-between border-b bg-white px-6 max-lg:left-0">
      <p className="text-sm text-zinc-500">Dashboard</p>

      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-3"
          aria-label="Open account menu"
        >
          <span className="hidden text-sm font-medium sm:block">
            {email || "User"}
          </span>

          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#635bff] text-sm font-medium text-white">
            {initials}
          </div>
        </button>

        {open && (
          <div className="absolute right-0 top-11 w-44 rounded-lg border bg-white p-1 shadow-lg">
            <button
              onClick={openProfile}
              className="w-full rounded-md px-3 py-2 text-left text-sm hover:bg-zinc-100"
            >
              Profile
            </button>

            <button
              onClick={logout}
              className="w-full rounded-md px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50"
            >
              Log out
            </button>
          </div>
        )}
      </div>
    </header>
  );
}