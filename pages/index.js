import {BsTwitter} from 'react-icons/bs'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Tweets from './component/Tweets'
import prisma from 'lib/prisma'
import { getTweets } from 'lib/data.js'


export default function Home({tweets}) {

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
    <div className="bg-black h-screen font-roboto flex flex-col justify-center items-center space-y-10">

      <div className="">
      <Tweets tweets={tweets} />
      </div>

      <div className="">
      <h2 className='mb-10'>Join the conversation!</h2>
      </div>

      <div className="logo">
        <BsTwitter/>
      </div>
 
      <div>
        <a href="/api/auth/signin" className="btn">Login</a>
      </div>
      
    </div>
  )
}


export async function getServerSideProps() {
  const take = 3
  let tweets = await getTweets(prisma, take)
  tweets = JSON.parse(JSON.stringify(tweets))

  return {
    props: {
      tweets,
    },
  }
}