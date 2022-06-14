
import { useSession } from 'next-auth/react'
import Loading from './loading'
import Newtweet from './NewTweet'
import Search from './search'
import Sidebar from './sidebar'

export default function Home() {
  const { data: session, status } = useSession()
  
  if(!session) return <Loading/>
  if(status === 'loading') return <Loading/>

  return (
    <div className="mx-auto px-auto bg-black h-screen">
 
    <div className='hidden md:grid md:grid-cols-4 md:block"'>

      {/* sidebar component */}
      <div className="sidebar-component">
        <Sidebar/>
      </div>

      {/* home component */}
     <div className="home-component col-span-2 visible md:block">
    <Newtweet/>
    </div>

    {/* search and trending component */}
    <div className="search-and-trending_component">
      <Search/>
    </div>
    </div>
 
    </div>
     )
}