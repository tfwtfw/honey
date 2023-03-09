import { AppList } from '@/components/AppsView'
import { ListsView } from '@/components/ListsView'
import { PageView } from '@/components/PageView'
import { SideMenu } from '@/components/SideMenu'
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



    return () => {
    }


  }, [])


  console.log(user)

  // ログアウト処理
  async function signout() {
    const { error } = await supabase.auth.signOut()
    // cookie削除
    document.cookie = "supabase-auth-token=; max-age=0";
    router.reload()
  }

  


  return (
    <div className='wrapper h-screen flex'>
      <SideMenu />
      <div className='flex-1 flex flex-col'>
        <AppList />
        <div className='main flex-1 flex'>
          <ListsView />
          <PageView />

        </div>

        {/* ログアウトボタン */}
        <button className="btn btn-primary" onClick={signout}>
          サインアウト
        </button>
        <Link className="block mt-4" href="/test_db">
          DB疎通テスト
        </Link>


      </div>
      {/* {console.log(user)} */}
      {/* {user.user_metadata.name} */}


    </div>
  )
}
