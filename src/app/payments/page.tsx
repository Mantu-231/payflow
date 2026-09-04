"use client";

import { useState } from "react";

const payments = [
  ["pi_8f29d1", "Aarav Sharma", "$249.00", "Succeeded"],
  ["pi_7c41a2", "Emma Wilson", "$89.00", "Succeeded"],
  ["pi_5b82c4", "Noah Williams", "$420.00", "Processing"],
  ["pi_3d91e7", "Olivia Brown", "$64.00", "Failed"],
];

export default function Payments() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [selected, setSelected] = useState<string[] | null>(null);

  const filtered = payments.filter((p) => {
    return (
      p.join(" ").toLowerCase().includes(search.toLowerCase()) &&
      (status === "All" || p[3] === status)
    );
  });

  return (
    <div className="mx-auto max-w-7xl p-6">
      <h1 className="text-2xl font-semibold">Payments</h1>
      <p className="mt-1 text-sm text-zinc-500">
        View and manage your transactions.
      </p>

      <div className="mt-6 flex gap-3">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search payments..."
          className="flex-1 rounded-lg border bg-white p-3 text-sm outline-none focus:border-[#635bff]"
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="rounded-lg border bg-white px-3 text-sm outline-none focus:border-[#635bff]"
        >
          <option>All</option>
          <option>Succeeded</option>
          <option>Processing</option>
          <option>Failed</option>
        </select>
      </div>

      <div className="mt-4 overflow-hidden rounded-xl border bg-white">
        {filtered.map((payment) => (
          <div
            key={payment[0]}
            onClick={() => setSelected(payment)}
            className="flex cursor-pointer items-center justify-between border-b p-5 hover:bg-zinc-50 last:border-0"
          >
            <div>
              <p className="font-medium">{payment[0]}</p>
              <p className="text-sm text-zinc-500">{payment[1]}</p>
            </div>

            <div className="text-right">
              <p className="font-medium">{payment[2]}</p>

              <span
                className={`mt-1 inline-block rounded-full px-2.5 py-1 text-xs ${
                  payment[3] === "Succeeded"
                    ? "bg-emerald-50 text-emerald-700"
                    : payment[3] === "Processing"
                    ? "bg-amber-50 text-amber-700"
                    : "bg-red-50 text-red-700"
                }`}
              >
                {payment[3]}
              </span>
            </div>
          </div>
        ))}

        {!filtered.length && (
          <p className="p-8 text-center text-sm text-zinc-500">
            No payments found.
          </p>
        )}
      </div>

      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-50 bg-black/30"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute right-0 top-0 h-full w-full max-w-sm bg-white p-6 shadow-xl"
          >
            <button
              onClick={() => setSelected(null)}
              className="float-right text-zinc-500 hover:text-zinc-900"
            >
              ✕
            </button>

            <h2 className="mt-8 text-xl font-semibold">{selected[0]}</h2>

            <div className="mt-8 space-y-5">
              <div>
                <p className="text-sm text-zinc-500">Customer</p>
                <p className="font-medium">{selected[1]}</p>
              </div>

              <div>
                <p className="text-sm text-zinc-500">Amount</p>
                <p className="text-2xl font-semibold">{selected[2]}</p>
              </div>

              <div>
                <p className="text-sm text-zinc-500">Status</p>
                <span
                  className={`mt-1 inline-block rounded-full px-2.5 py-1 text-xs ${
                    selected[3] === "Succeeded"
                      ? "bg-emerald-50 text-emerald-700"
                      : selected[3] === "Processing"
                      ? "bg-amber-50 text-amber-700"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {selected[3]}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
