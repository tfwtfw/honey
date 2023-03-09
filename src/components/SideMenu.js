import Link from "next/link";
import { supabase } from '../lib/supabaseClient';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'


async function signout() {
  const { error } = await supabase.auth.signOut()
  console.log("ログアウトボタンが押された");
}

export function SideMenu(props) {

  // const user = useUser();

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

        {/* {props.user.user_metadata.name} */}

        {/* footer-area */}
        <div className="p-6 border-t text-slate-400">
          <button onClick={signout}>log out</button>
        </div>
      
      </div>

    </div>
  )
}
