"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Menu,
  X,
  Home,
  CreditCard,
  Users,
  Settings,
} from "lucide-react";

const links = [
  ["/", "Overview", Home],
  ["/payments", "Payments", CreditCard],
  ["/customers", "Customers", Users],
  ["/settings", "Settings", Settings],
];


export default function MobileMenu() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed left-4 top-4 z-50 rounded-lg border bg-white p-2 shadow-sm lg:hidden"
        aria-label="Open menu"
      >
        <Menu size={20} />
      </button>

      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/30"
          />

          <aside className="relative h-full w-72 bg-white p-5 shadow-xl">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold">PayFlow</h1>

              <button
                onClick={() => setOpen(false)}
                className="rounded-lg p-2 text-zinc-500 hover:bg-zinc-100"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="mt-8 space-y-1">
              {links.map(([href, name, Icon]) => (
                <Link
                  key={href as string}
                  href={href as string}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 rounded-lg p-3 text-sm ${
                    path === href
                      ? "bg-[#635bff] text-white"
                      : "text-zinc-600 hover:bg-zinc-100"
                  }`}
                >
                  <Icon size={17} />
                  {name as string}
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}
