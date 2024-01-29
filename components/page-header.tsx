import { ModeToggle } from "./mode-toggle";

export default function PageHeader() {
  return (
    <header className="flex justify-between p-6 border-b shadow-lg items-center">
      <h1 className="font-bold text-2xl">Anime Tracker</h1>
      <ModeToggle />
    </header>
  )
}