import Link from "next/link";

export function Header() {
  return (
    <div className="h-14 p-4 border-b flex items-center">
      <Link href="/home" className="font-bold text-2xl"><span className="text-primary">bkma</span>List</Link>
    </div>
  )
}
