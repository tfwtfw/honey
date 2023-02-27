import { supabase } from './../lib/supabaseClient';

async function signInWithTwitter() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'twitter',
  })
}

export default function test_auth() {
  return (
    <button className="btn" onClick={signInWithTwitter}>認証テスト</button>
  )
}
