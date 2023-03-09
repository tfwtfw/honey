import Link from "next/link";
import { supabase } from '../lib/supabaseClient';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'


export function Header(props) {

  return (
    <div className="flex items-center px-4 h-14">
        <Link href="/home" className="font-bold text-2xl">
          <span className="text-primary">X</span>
          List
        </Link>
    </div>
  )
}
