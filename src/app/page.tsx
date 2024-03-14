import { PaintBrushIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="m-auto grid text-center">
      <a
        href="/masterpieces"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        rel="noopener noreferrer"
      >
        <div className="flex row mb-3 justify-center">
          <h2 className="text-2xl font-semibold ml-2">Masterpieces</h2>{" "}
          <PaintBrushIcon className="w-6 text-gray-700 dark:text-gray-300 ml-2" />
        </div>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Own original masterpieces that speaks to your soul and transforms your
          space.
        </p>
      </a>
    </div>
  );
}
