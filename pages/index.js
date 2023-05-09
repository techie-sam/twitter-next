// import Image from 'next/image'
import LeftSideNav from '@/components/LeftSideNav'
import RightSideNav from '@/components/RightSideNav'
import Tweets from '@/components/Tweets'
import { Inter } from 'next/font/google'
import { faGear, faHashtag } from "@fortawesome/free-solid-svg-icons";

const inter = Inter({ subsets: ['latin'] })

const RIGHT_SIDENAV_CONTENT = [
  { link: "#", text: "Sign in as" },
  { link: "#", text: "Sign Up With Apple" },
  { link: "#", text: "Create Account" },
]

const LEFT_SIDENAV_CONTENT = [
  { icon: faHashtag, text: "Explore" },
  { icon: faGear, text: "Settings" },
]

export default function Home() {
  return (
    <main className="">
      <div className='flex justify-center h-screen space-x-2'>
        <LeftSideNav LEFT_SIDENAV_CONTENT={LEFT_SIDENAV_CONTENT} route="landingPage" />
        <Tweets route="landingPage" />
        <RightSideNav RIGHT_SIDENAV_CONTENT={RIGHT_SIDENAV_CONTENT} route="landingPage" />
      </div>
    </main>
  )
}
