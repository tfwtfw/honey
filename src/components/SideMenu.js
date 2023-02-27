import Link from "next/link";

export function SideMenu() {
  return (
    <div className="h-full border-r w-60 flex flex-col">

      {/* logo-area */}
      <div className="min-h-16 border-b flex items-center pl-9">
        <Link href="/home" className="font-bold text-2xl"><span className="text-primary">X</span>List</Link>
      </div>

      <div className="h-full flex flex-col justify-between">

        {/* menu-area */}
        <ul className="menu bg-base-100 p-6 text-xl gap-4">
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

        {/* footer-area */}
        <div className="p-6 border-t text-slate-400">
          <Link href="/">log out</Link>
        </div>
      
      </div>

    </div>
  )
}
