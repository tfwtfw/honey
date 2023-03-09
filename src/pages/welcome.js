// welcome.js
// 未ログインの場合に表示するLPです。ここからログインします。

import Link from 'next/link'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import { supabase } from '../lib/supabaseClient';
import { useEffect } from 'react'
import { Header } from '@/components/Header';


export default function Welcome() {


  const user = useUser();
  const router = useRouter();


  // ログインチェック
  useEffect(() => {
    // ログイン済みの場合は/homeへ
    if (user) router.push('/home');
  }, [user])


  // Twitterログイン処理
  async function signInWithTwitter() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'twitter',
    })
  }


  // ログアウト処理
  async function signout() {
    const { error } = await supabase.auth.signOut()
    // cookie削除
    document.cookie = "supabase-auth-token=; max-age=0";
    // リロード
    router.push('/')
  }


  return (
    <div className='wrapper h-screen flex flex-col'>

      {/* ヘッダー */}
      <Header page="welcome"/>

      {/* メイン */}
      <div className="h-full text-center px-4">

        {/* キャッチコピー */}
        <h1 className="text-6xl font-bold leading-tight tracking-wider mt-52">
          Play URL lists ✨
        </h1>

        {/* ログインボタン */}
        <button onClick={signInWithTwitter} className="btn btn-primary mt-16 w-fit" >
          login with Twitter
        </button>


      </div>
    </div>
  )
}
