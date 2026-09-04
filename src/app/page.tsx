import {
  CreditCard,
  DollarSign,
  Users,
  ArrowUpRight,
} from "lucide-react";

const payments = [
  ["pi_8f29d1", "Aarav Sharma", "$249.00", "Succeeded"],
  ["pi_7c41a2", "Emma Wilson", "$89.00", "Succeeded"],
  ["pi_5b82c4", "Noah Williams", "$420.00", "Processing"],
  ["pi_3d91e7", "Olivia Brown", "$64.00", "Failed"],
];

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl p-6">
      <h1 className="text-2xl font-semibold">Overview</h1>

      <p className="mt-1 text-sm text-zinc-500">
        Monitor your payments and business performance.
      </p>

      <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card
          title="Total revenue"
          value="$124,520"
          change="+12.5%"
          icon={<DollarSign size={18} />}
        />

        <Card
          title="Successful payments"
          value="2,481"
          change="+8.2%"
          icon={<CreditCard size={18} />}
        />

        <Card
          title="Customers"
          value="1,842"
          change="+5.4%"
          icon={<Users size={18} />}
        />

        <Card
          title="Refunds"
          value="$8,420"
          change="-3.1%"
          icon={<ArrowUpRight size={18} />}
        />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="rounded-xl border bg-white p-6 lg:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-semibold">Revenue</h2>

              <p className="text-sm text-zinc-500">
                Last 30 days
              </p>
            </div>

            <button className="rounded-lg border px-3 py-2 text-xs hover:bg-zinc-50">
              Last 30 days
            </button>
          </div>

          <div className="mt-8 h-48">
            <svg viewBox="0 0 600 200" className="h-full w-full">
              {[40, 80, 120, 160].map((y) => (
                <line
                  key={y}
                  x1="0"
                  y1={y}
                  x2="600"
                  y2={y}
                  stroke="#f4f4f5"
                />
              ))}

              <path
                d="M0 160 C70 140 100 100 160 125 S250 100 310 115 S400 45 460 75 S530 35 600 50"
                fill="none"
                stroke="#635bff"
                strokeWidth="3"
              />
            </svg>
          </div>
        </div>

        <div className="rounded-xl border bg-white p-6">
          <h2 className="font-semibold">Payment volume</h2>

          <p className="text-sm text-zinc-500">
            This month
          </p>

          <div className="mt-8 space-y-6">
            <Progress
              name="Succeeded"
              value="94%"
              width="94%"
            />

            <Progress
              name="Processing"
              value="3%"
              width="3%"
            />

            <Progress
              name="Failed"
              value="3%"
              width="3%"
              red
            />
          </div>
        </div>
      </div>

      <div className="mt-6 overflow-hidden rounded-xl border bg-white">
        <div className="flex items-center justify-between border-b p-6">
          <div>
            <h2 className="font-semibold">
              Recent payments
            </h2>

            <p className="text-sm text-zinc-500">
              Your latest transactions
            </p>
          </div>

          <a
            href="/payments"
            className="text-sm font-medium text-[#635bff] hover:underline"
          >
            View all
          </a>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50 text-left text-xs text-zinc-500">
              <tr>
                <th className="p-4">Payment</th>
                <th className="p-4">Customer</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>

            <tbody>
              {payments.map(([id, customer, amount, status]) => (
                <tr
                  key={id}
                  className="border-t hover:bg-zinc-50"
                >
                  <td className="p-4 font-medium">
                    {id}
                  </td>

                  <td className="p-4">
                    {customer}
                  </td>

                  <td className="p-4 font-medium">
                    {amount}
                  </td>

                  <td className="p-4">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs ${
                        status === "Succeeded"
                          ? "bg-emerald-50 text-emerald-700"
                          : status === "Processing"
                            ? "bg-amber-50 text-amber-700"
                            : "bg-red-50 text-red-700"
                      }`}
                    >
                      {status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

function Card({
  title,
  value,
  change,
  icon,
}: any) {
  return (
    <div className="rounded-xl border bg-white p-5 transition hover:shadow-sm">
      <div className="flex justify-between text-zinc-500">
        <span className="text-sm">{title}</span>
        {icon}
      </div>

      <div className="mt-5 flex justify-between">
        <b className="text-2xl">{value}</b>

        <span
          className={
            change.startsWith("-")
              ? "text-xs text-red-600"
              : "text-xs text-emerald-600"
          }
        >
          {change}
        </span>
      </div>
    </div>
  );
}

function Progress({
  name,
  value,
  width,
  red = false,
}: any) {
  return (
    <div>
      <div className="mb-2 flex justify-between text-sm">
        <span>{name}</span>
        <b>{value}</b>
      </div>

      <div className="h-2 rounded-full bg-zinc-100">
        <div
          className={`h-2 rounded-full ${
            red ? "bg-red-500" : "bg-[#635bff]"
          }`}
          style={{ width }}
        />
      </div>
    </div>
  );
}
