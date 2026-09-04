"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProfilePage() {
  const [name, setName] = useState("Aarav Sharma");
  const [email, setEmail] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const storedEmail = localStorage.getItem("payflow_user");
    const storedName = localStorage.getItem("payflow_name");

    if (storedEmail) {
      setEmail(storedEmail);
    }

    if (storedName) {
      setName(storedName);
    }
  }, []);

  function saveProfile() {
    localStorage.setItem("payflow_name", name);
    localStorage.setItem("payflow_user", email);

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2000);
  }

  const initials =
    name
      .trim()
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join("") || "U";

  return (
    <div className="mx-auto max-w-3xl p-6">
      <div className="mb-6">
        <Link
          href="/"
          className="text-sm font-medium text-[#635bff] hover:underline"
        >
          ← Back to overview
        </Link>

        <h1 className="mt-4 text-2xl font-semibold">Profile</h1>

        <p className="mt-1 text-sm text-zinc-500">
          Manage your personal information.
        </p>
      </div>

      <div className="rounded-xl border bg-white p-6">
        <div className="flex items-center gap-4 border-b pb-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#635bff] text-xl font-semibold text-white">
            {initials}
          </div>

          <div>
            <h2 className="font-semibold">{name}</h2>
            <p className="text-sm text-zinc-500">{email || "No email set"}</p>
          </div>
        </div>

        <div className="mt-6 space-y-5">
          <div>
            <label className="text-sm font-medium text-zinc-700">
              Full name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm outline-none focus:border-[#635bff] focus:ring-2 focus:ring-[#635bff]/10"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-zinc-700">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm outline-none focus:border-[#635bff] focus:ring-2 focus:ring-[#635bff]/10"
            />
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={saveProfile}
              className="rounded-lg bg-[#635bff] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#554ee6]"
            >
              Save changes
            </button>

            {saved && (
              <span className="text-sm text-emerald-600">
                Profile saved.
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
