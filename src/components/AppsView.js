import Link from "next/link";

export function AppList() {
  return (
    <div className="min-h-16 px-6 border-b flex gap-6 flex-wrap items-center">
      <Link href="https://calendar.google.com/calendar/u/0/r/week?tab=cc" target="_blank" className="text-md">Calendar</Link>
      <Link href="https://jp.inoreader.com/all_articles" target="_blank" className="text-md">Inoreader</Link>
      <Link href="https://www.notion.so/" target="_blank" className="text-md">Notion</Link>
      <Link href="https://jp.tradingview.com/" target="_blank" className="text-md">TraidingView</Link>
      <Link href="https://twitter.com/home" target="_blank" className="text-md">Twitter</Link>
      <Link href="https://www.youtube.com/" target="_blank" className="text-md">YouTube</Link>
      <Link href="/home" target="" className="text-md text-slate-400">＋</Link>
    </div>
  )
}
