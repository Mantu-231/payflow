"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleLogin(e: FormEvent) {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please enter email and password.");
      return;
    }

    setLoading(true);

    localStorage.setItem("payflow_logged_in", "true");
    localStorage.setItem("payflow_user", email.trim());

    router.replace("/");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 px-4">
      <div className="w-full max-w-md rounded-2xl border bg-white p-8 shadow-sm">
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#635bff] text-lg font-bold text-white">
            P
          </div>

          <h1 className="mt-4 text-2xl font-bold text-zinc-900">
            Welcome to PayFlow
          </h1>

          <p className="mt-2 text-sm text-zinc-500">
            Sign in to your account
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
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
              className="mt-2 w-full rounded-lg border bg-white px-3 py-2.5 text-sm outline-none focus:border-[#635bff] focus:ring-2 focus:ring-[#635bff]/10"
            />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-zinc-700">
                Password
              </label>

              <Link
                href="/forgot-password"
                className="text-xs font-medium text-[#635bff] hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              autoComplete="current-password"
              className="mt-2 w-full rounded-lg border bg-white px-3 py-2.5 text-sm outline-none focus:border-[#635bff] focus:ring-2 focus:ring-[#635bff]/10"
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
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-zinc-200" />
          <span className="text-xs text-zinc-400">OR</span>
          <div className="h-px flex-1 bg-zinc-200" />
        </div>

        <p className="text-center text-sm text-zinc-500">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-[#635bff] hover:underline"
          >
            Create account
          </Link>
        </p>
      </div>
    </main>
  );
}