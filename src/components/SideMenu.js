import Link from "next/link";

export function SideMenu() {
  return (
    <div className="h-full border-r w-60 flex flex-col justify-between">
      <ul className="menu bg-base-100 p-8 text-xl gap-4">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Favorites</a>
        </li>
        <li>
          <a>Follows</a>
        </li>
        <li>
          <a>Timeline</a>
        </li>
      </ul>
      <div className="p-6 border-t text-slate-400">
        <Link href="/">log out</Link>
      </div>
    </div>
  )
}
