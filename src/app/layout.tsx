"use client";

import "./globals.css";
import Sidebar from "@/components/layout/sidebar";
import Topbar from "@/components/layout/topbar";
import MobileMenu from "@/components/layout/mobilemenu";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  const isLoginPage = pathname === "/login";

  useEffect(() => {
    const loggedIn = localStorage.getItem("payflow_logged_in");

    if (!isLoginPage && loggedIn !== "true") {
      router.replace("/login");
      return;
    }

    if (isLoginPage && loggedIn === "true") {
      router.replace("/");
      return;
    }

    setChecked(true);
  }, [isLoginPage, router]);

  if (!checked) {
    return (
      <html lang="en">
        <body className="bg-zinc-50 text-zinc-900" />
      </html>
    );
  }

  if (isLoginPage) {
    return (
      <html lang="en">
        <body className="bg-zinc-50 text-zinc-900">{children}</body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body className="bg-zinc-50 text-zinc-900">
        <Sidebar />
        <Topbar />
        <MobileMenu />

        <main className="ml-60 pt-16 max-lg:ml-0">
          {children}
        </main>
      </body>
    </html>
  );
}
