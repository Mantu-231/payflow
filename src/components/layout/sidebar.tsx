"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
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

export default function Sidebar() {
  const path = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-60 border-r bg-white p-5 max-lg:hidden">
      <h1 className="mb-8 text-xl font-bold">PayFlow</h1>

      <nav className="space-y-1">
        {links.map(([href, name, Icon]) => (
          <Link
            key={href as string}
            href={href as string}
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
  );
}
