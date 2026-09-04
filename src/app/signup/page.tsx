"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSignup(e: FormEvent) {
    e.preventDefault();
    setError("");

    if (!name.trim() || !email.trim() || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    localStorage.setItem("payflow_logged_in", "true");
    localStorage.setItem("payflow_user", email.trim());
    localStorage.setItem("payflow_name", name.trim());

    router.replace("/");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 py-8">
      <div className="w-full max-w-md rounded-2xl border bg-white p-8 shadow-sm">
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#635bff] text-lg font-bold text-white">
            P
          </div>

          <h1 className="mt-4 text-2xl font-bold text-zinc-900">
            Create your account
          </h1>

          <p className="mt-2 text-sm text-zinc-500">
            Get started with PayFlow
          </p>
        </div>

        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-zinc-700">
              Full name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Aarav Sharma"
              autoComplete="name"
              className="mt-2 w-full rounded-lg border bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[#635bff] focus:ring-2 focus:ring-[#635bff]/10"
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
              placeholder="you@example.com"
              autoComplete="email"
              className="mt-2 w-full rounded-lg border bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[#635bff] focus:ring-2 focus:ring-[#635bff]/10"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-zinc-700">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 6 characters"
              autoComplete="new-password"
              className="mt-2 w-full rounded-lg border bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[#635bff] focus:ring-2 focus:ring-[#635bff]/10"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-zinc-700">
              Confirm password
            </label>

            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Repeat your password"
              autoComplete="new-password"
              className="mt-2 w-full rounded-lg border bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[#635bff] focus:ring-2 focus:ring-[#635bff]/10"
            />
          </div>

          {error && (
            <div className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-[#635bff] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#554ee6] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Creating account..." : "Create account"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-zinc-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-[#635bff] hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}
