// setting.js
// 設定画面

import { Apps } from '@/components/Apps'
import { Header } from '@/components/Header'
import { Lists } from '@/components/Lists'
import { PageView } from '@/components/PageView'
import { Menu } from '@/components/Menu'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import Link from '@supabase/ui/dist/cjs/components/Typography/Link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient';
import Image from 'next/image'


export default function Setting() {


  const user = useUser();
  const router = useRouter();

  const [iconUrl, setIconUrl] = useState("/.svg")
  const [userName, setUserName] = useState("-")


  useEffect(() => {

    // 未ログインの場合は/へ
    if (!user) router.push('/');

    // ユーザー情報取得
    if (user) {
      setIconUrl(user.user_metadata.avatar_url) // アイコンURL
      setUserName(user.user_metadata.name) // 名前
      console.log(user)
    }

  }, [user])


  // ログアウト処理
  async function signout() {
    const { error } = await supabase.auth.signOut()
    document.cookie = "supabase-auth-token=; max-age=0" // cookie削除
    router.reload() // 画面リロード
  }

  return (
    <div className='wrapper h-screen'>

      {/* ヘッダー */}
      <Header />

      {/* メイン */}
      <div className='max-w-2xl mx-auto'>

        {/* プロフィール */}
        <div className="p-4">
          <h2 className="text-3xl font-bold mb-8">Profile</h2>
          <p className='my-4'>Logged in with Twitter</p>
          <div className='flex items-center gap-4 my-4'>
            <Image
              className="rounded-full"
              src={iconUrl}
              width={32} // 必須
              height={32} // 必須
              alt=''
            />
            <p>{userName}</p>
          </div>
        </div>

        {/* 設定 */}
        <div className="p-4">
          <h2 className="text-3xl font-bold mb-8">Setting</h2>
          {/* ログアウトボタン */}
          <p className="cursor-pointer border-b w-fit px-1" onClick={signout}>
            log out
          </p>
        </div>


      </div>

    </div>
  )
}
