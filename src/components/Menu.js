// Menu.js
// メインメニューのコンポーネントです。

import Link from "next/link";
import { supabase } from '../lib/supabaseClient';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'


export function Menu(props) {

  return (
    <div className="flex p-4 gap-5 justify-center">

      <Link href="" className="border-b p-1 font-bold">
        Home
      </Link>

      <Link href="" className="border-b p-1">
        Timeline
      </Link>

      <Link href="" className="border-b p-1">
        Favorite
      </Link>

      <Link href="" className="border-b p-1">
        Follow
      </Link>

    </div>
  )
}
