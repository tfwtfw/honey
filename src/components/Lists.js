// Lists.js
// ログインユーザーが保有するURLリストの一覧です。

import Link from "next/link";

export function Lists() {

  return (
    <div className="p-4">

      <h2 className="text-3xl font-bold mb-4">Lists</h2>

      <div>
        <Link href="" className="block border-b py-4 px-1">CSS／デザイン</Link>
        <Link href="" className="block border-b py-4 px-1">デプロイURL</Link>
        <Link href="" className="block border-b py-4 px-1">記事</Link>
      </div>

    </div>
  )
}
