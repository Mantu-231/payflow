"use client";

import { useState } from "react";

export default function Settings() {
  const [name, setName] = useState("Aarav Sharma");
  const [email, setEmail] = useState("aarav@example.com");
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [paymentAlerts, setPaymentAlerts] = useState(true);
  const [saved, setSaved] = useState(false);

  function save() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="mx-auto max-w-4xl p-6">
      <h1 className="text-2xl font-semibold">Settings</h1>
      <p className="mt-1 text-sm text-zinc-500">
        Manage your account settings.
      </p>

      <div className="mt-6 rounded-xl border bg-white p-6">
        <h2 className="font-semibold">Profile</h2>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-sm text-zinc-600">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 w-full rounded-lg border p-3 text-sm outline-none focus:border-[#635bff]"
            />
          </div>

          <div>
            <label className="text-sm text-zinc-600">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full rounded-lg border p-3 text-sm outline-none focus:border-[#635bff]"
            />
          </div>
        </div>

        <button
          onClick={save}
          className="mt-5 rounded-lg bg-[#635bff] px-4 py-2 text-sm font-medium text-white hover:bg-[#554ee6]"
        >
          Save changes
        </button>

        {saved && (
          <p className="mt-3 text-sm text-emerald-600">
            Changes saved successfully.
          </p>
        )}
      </div>

      <div className="mt-6 rounded-xl border bg-white p-6">
        <h2 className="font-semibold">Notifications</h2>

        <div className="mt-5 space-y-5">
          <Toggle
            title="Email notifications"
            description="Receive account updates by email."
            checked={emailAlerts}
            onChange={() => setEmailAlerts(!emailAlerts)}
          />

          <Toggle
            title="Payment notifications"
            description="Get notified when a payment changes status."
            checked={paymentAlerts}
            onChange={() => setPaymentAlerts(!paymentAlerts)}
          />
        </div>
      </div>
    </div>
  );
}

function Toggle({
  title,
  description,
  checked,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="mt-1 text-sm text-zinc-500">{description}</p>
      </div>

      <button
        onClick={onChange}
        className={`relative h-6 w-11 rounded-full ${
          checked ? "bg-[#635bff]" : "bg-zinc-300"
        }`}
      >
        <span
          className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
            checked ? "left-6" : "left-1"
          }`}
        />
      </button>
    </div>
  );
}
