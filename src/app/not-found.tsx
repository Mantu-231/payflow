export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#635bff]">404</h1>

        <h2 className="mt-4 text-xl font-semibold">
          Page not found
        </h2>

        <p className="mt-2 text-sm text-zinc-500">
          The page you are looking for does not exist.
        </p>

        <a
          href="/"
          className="mt-6 inline-block rounded-lg bg-[#635bff] px-4 py-2 text-sm font-medium text-white hover:bg-[#554ee6]"
        >
          Go to overview
        </a>
      </div>
    </div>
  );
}
