// Apps.js
// 

import Link from "next/link";

export function Apps() {

  return (
    <div className="p-4">

      <h2 className="text-3xl font-bold mb-8">Apps</h2>

      <div className="flex gap-3 mb-4 flex-wrap">
        <Link href="https://calendar.google.com/calendar/u/0/r/week?tab=cc" target="_blank" className="border rounded-2xl px-3 py-1">Calendar</Link>
        <Link href="https://jp.inoreader.com/all_articles" target="_blank" className="border rounded-2xl px-3 py-1">Inoreader</Link>
        <Link href="https://www.notion.so/" target="_blank" className="border rounded-2xl px-3 py-1">Notion</Link>
        <Link href="https://jp.tradingview.com/" target="_blank" className="border rounded-2xl px-3 py-1">TraidingView</Link>
        <Link href="https://twitter.com/home" target="_blank" className="border rounded-2xl px-3 py-1">Twitter</Link>
        <Link href="https://www.youtube.com/" target="_blank" className="border rounded-2xl px-3 py-1">YouTube</Link>
      </div>

      <div className="flex gap-4 justify-end">
        <button href="">add</button>
        <button href="">edit</button>
      </div>

    </div>
  )
}
