import { Lp } from '@/components/Lp'
import Link from 'next/link'


export default function Index() {
  return (
    <div className='wrapper h-screen flex flex-col'>
      <div className="h-14 p-4 flex items-center">
        <Link href="/home" className="font-bold text-2xl"><span className="text-primary">X</span>List</Link>
      </div>

      <Lp />
    </div>
  )
}
