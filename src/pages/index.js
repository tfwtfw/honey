import { useUser } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'


export default function Index() {


  const user = useUser();
  const router = useRouter();


  useEffect(() => {
    if (user) {
      // ログイン済みの場合は/homeへ
      router.push('/home');
    } else {
      // 未ログインの場合は/welcomeへ
      router.push('/welcome');
    }
  }, [user])


  return (
    <></>
  )


}
