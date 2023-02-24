import { Header } from '@/components/Header'
import { SideMenu } from '@/components/SideMenu'


export default function Home() {
  return (
    <div className='wrapper h-screen flex flex-col'>
      <Header />
      <div className="flex-1">
        <SideMenu />
      </div>

    </div>
  )
}
