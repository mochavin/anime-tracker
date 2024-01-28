import { ModeToggle } from "./mode-toggle";

export default function PageHeader() {
  return (
    <header className="flex justify-between p-6">
      <h1>Header</h1>
      <ModeToggle />
    </header>
  )
}