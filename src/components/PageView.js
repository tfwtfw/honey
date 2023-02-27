import Image from "next/image";
import Link from "next/link";

export function PageView() {
  return (
    <div className="border-r w-5/12 p-6 flex flex-col gap-4">

      {/* Title of List */}
      <div className="p-6">
        <p className="text-2xl text-center">CSS／デザイン</p>
      </div>

      {/* Info of List */}
      <div className="border-b text-xs pb-2 pt-6 text-slate-400">
        <p>by Toma</p>
      </div>

      {/* Function of List */}
      <div className="px-2 py-1 text-sm text-slate-400 flex justify-end">
        <div className="flex gap-4">
          <Link href="">add</Link>
          <Link href="">edit</Link>
        </div>
      </div>

      {/* URLs */}
      <div className="flex flex-col gap-4">
        <Link href="https://tailwindcss.com/docs/installation" target="_blank" className="flex gap-4 items-center">
          <Image src='/sample.jpg' width={96} height={54} alt='' />
          <div>
            <p>Tailwindcss</p>
            <p className="text-xs text-slate-400">https://tailwindcss.com/docs/installation</p>
          </div>
        </Link>
        <Link href="https://tailwindcss.com/docs/installation" target="_blank" className="flex gap-4 items-center">
          <Image src='/sample.jpg' width={96} height={54} alt='' />
          <div>
            <p>Tailwindcss</p>
            <p className="text-xs text-slate-400">https://tailwindcss.com/docs/installation</p>
          </div>
        </Link>
        <Link href="https://tailwindcss.com/docs/installation" target="_blank" className="flex gap-4 items-center">
          <Image src='/sample.jpg' width={96} height={54} alt='' />
          <div>
            <p>Tailwindcss</p>
            <p className="text-xs text-slate-400">https://tailwindcss.com/docs/installation</p>
          </div>
        </Link>
      </div>

    </div>
  )
}
