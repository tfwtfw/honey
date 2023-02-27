import { AppList } from '@/components/AppsView'
import { ListsView } from '@/components/ListsView'
import { PageView } from '@/components/PageView'
import { SideMenu } from '@/components/SideMenu'


export default function Home() {
  return (
    <div className='wrapper h-screen flex'>
      <SideMenu />
      <div className='flex-1 flex flex-col'>
        <AppList />
        <div className='main flex-1 flex'>
          <ListsView/>
          <PageView/>

        </div>
      </div>

    </div>
  )
}
