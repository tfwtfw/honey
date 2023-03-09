import Link from "next/link";
import { supabase } from '../lib/supabaseClient';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useEffect, useState } from "react";


export function Header(props) {


  const user = useUser();
  const router = useRouter();

  const [iconUrl, setIconUrl] = useState("/noimage.svg")


  useEffect(() => {
    // ユーザーアイコンURL取得
    if (user) {
      setIconUrl(user.user_metadata.avatar_url)
      console.log(iconUrl)
    }
  }, [user])


  return (
    <div className="flex items-center justify-between px-4 h-14">

      {/* ロゴ */}
      <Link href="/home" className="font-bold text-2xl">
        <span className="text-primary">X</span>
        List
      </Link>


      {/* プロフィールアイコン */}
      <Link href="/setting">
        <Image
          className="rounded-full"
          src={iconUrl}
          width={32} // 必須
          height={32} // 必須
          alt=''
        />
      </Link>

    </div>
  )
}
