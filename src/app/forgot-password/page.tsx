"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!email.trim()) return;

    setSent(true);
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 px-4">
      <div className="w-full max-w-md rounded-2xl border bg-white p-8 shadow-sm">
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#635bff] text-lg font-bold text-white">
            P
          </div>

          <h1 className="mt-4 text-2xl font-bold text-zinc-900">
            Forgot password?
          </h1>

          <p className="mt-2 text-sm text-zinc-500">
            Enter your email and we'll help you reset your password.
          </p>
        </div>

        {sent ? (
          <div className="rounded-lg bg-emerald-50 p-4 text-center text-sm text-emerald-700">
            Password reset instructions have been sent to your email.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-sm font-medium text-zinc-700">
                Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                autoComplete="email"
                className="mt-2 w-full rounded-lg border bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[#635bff] focus:ring-2 focus:ring-[#635bff]/10"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-[#635bff] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#554ee6]"
            >
              Send reset instructions
            </button>
          </form>
        )}

        <p className="mt-6 text-center text-sm text-zinc-500">
          Remember your password?{" "}
          <Link
            href="/login"
            className="font-medium text-[#635bff] hover:underline"
          >
            Back to sign in
          </Link>
        </p>
      </div>
    </main>
  );
}
