// home.js
// ログイン後のメインとなるページです。

import { Apps } from '@/components/Apps'
import { Header } from '@/components/Header'
import { Lists } from '@/components/Lists'
import { PageView } from '@/components/PageView'
import { Menu } from '@/components/Menu'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import Link from '@supabase/ui/dist/cjs/components/Typography/Link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { supabase } from '../lib/supabaseClient';


export default function Home() {


  const user = useUser();
  const router = useRouter();


  useEffect(() => {
    // 未ログインの場合は/へ
    if (!user) router.push('/');

    (async () => {
      let { data } = await supabase.from('countries').select();
      console.log(data)
    })
  }, [])


  return (
    <div className='wrapper h-screen'>

      {/* ヘッダー */}
      <Header />

      {/* メイン */}
      <div className='max-w-5xl mx-auto'>
        <Menu />
        <Apps />
        <Lists />
      </div>

      {/* デバッグ用 */}
      <div className='p-4'>
        <Link className="block mt-4" href="/test_db">
          DB疎通テスト
        </Link>
      </div>

    </div>
  )
}
