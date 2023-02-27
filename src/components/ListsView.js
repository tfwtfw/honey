import Link from "next/link";

export function ListsView() {
  return (
    <div className="border-r w-4/12">

      {/* Header of ListsView */}
      <div className="px-2 py-1 text-sm text-slate-400 border-b flex justify-between">
        <p>Lists</p>
        <div className="flex gap-4">
          <Link href="">add</Link>
          <Link href="">edit</Link>
        </div>
      </div>

      {/* Lists */}
      <div className="border-b">
        <Link href="" className="block p-6">CSS／デザイン</Link>
      </div>
      <div className="border-b">
        <Link href="" className="block p-6">デプロイURL</Link>
      </div>
      <div className="border-b">
        <Link href="" className="block p-6">記事</Link>
      </div>

    </div>
  )
}
