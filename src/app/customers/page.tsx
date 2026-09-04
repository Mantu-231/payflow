"use client";

import { useState } from "react";

const customers = [
  ["Aarav Sharma", "aarav@example.com", "$2,490"],
  ["Emma Wilson", "emma@example.com", "$1,820"],
  ["Noah Williams", "noah@example.com", "$960"],
  ["Olivia Brown", "olivia@example.com", "$640"],
];

export default function Customers() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<string[] | null>(null);

  const filtered = customers.filter((customer) =>
    customer.join(" ").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mx-auto max-w-7xl p-6">
      <h1 className="text-2xl font-semibold">Customers</h1>
      <p className="mt-1 text-sm text-zinc-500">
        Manage your customers.
      </p>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search customers..."
        className="mt-6 w-full rounded-lg border bg-white p-3 text-sm outline-none focus:border-[#635bff]"
      />

      <div className="mt-4 overflow-hidden rounded-xl border bg-white">
        {filtered.map((customer) => (
          <div
            key={customer[1]}
            onClick={() => setSelected(customer)}
            className="flex cursor-pointer items-center justify-between border-b p-5 transition hover:bg-zinc-50 last:border-0"
          >
            <div>
              <p className="font-medium">{customer[0]}</p>
              <p className="text-sm text-zinc-500">{customer[1]}</p>
            </div>

            <p className="font-medium">{customer[2]}</p>
          </div>
        ))}

        {!filtered.length && (
          <p className="p-8 text-center text-sm text-zinc-500">
            No customers found.
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
            <p className="mt-1 text-sm text-zinc-500">{selected[1]}</p>

            <div className="mt-8 rounded-lg bg-zinc-50 p-4">
              <p className="text-sm text-zinc-500">Total spent</p>
              <p className="mt-1 text-2xl font-semibold">{selected[2]}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}