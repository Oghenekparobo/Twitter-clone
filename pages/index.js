import {BsTwitter} from 'react-icons/bs'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Loading from './loading'


export default function Home() {

  const {data: session , status} = useSession()
  const router = useRouter()

  // returns the loading page
  if (status == 'loading') {
    return null
  }


  // redirects you to the homepage
  if(session){ 
    router.push('/home')
  }


  return (
    <div className="bg-black h-screen font-roboto flex flex-col justify-center items-center space-y-28">

      <div className="logo">
        <BsTwitter/>
      </div>
 
      <div>
        <a href="/api/auth/signin" className="btn">Login</a>
      </div>
      
    </div>
  )
}
