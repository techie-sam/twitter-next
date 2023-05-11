// import Image from 'next/image'
import LeftSideNav from '@/components/LeftSideNav'
import RightSideNav from '@/components/RightSideNav'
import Tweets from '@/components/Tweets'
// import { Inter } from 'next/font/google'
import { faGear, faHashtag } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/router';
// import { faBell, faHamburger, faHashtag, faHouse, faMessage, faSave, faUser, faUserGroup } from "@fortawesome/free-solid-svg-icons";

// const inter = Inter({ subsets: ['latin'] })

const menuItems = [
  { icon: faHashtag, text: "Explore" },
  { icon: faGear, text: "Home" },
]

const rightBarContents = [
  { link: "#", text: "Sign in as" },
  { link: "#", text: "Sign Up With Apple" },
  { link: "#", text: "Create Account" },
]
// const menuItems = [
//   { icon: faHouse, text: "Home" },
//   { icon: faHashtag, text: "Explore" },
//   { icon: faUserGroup, text: "Communities" },
//   { icon: faBell, text: "Notifications" },
//   { icon: faMessage, text: "Messages" },
//   { icon: faSave, text: "Bookmarks" },
//   { icon: faUser, text: "Profile" },
//   { icon: faHamburger, text: "More" },
// ]




export default function Home() {
  // const router  = useRouter()
  return (
    <main className="">
      <div className='flex justify-center h-screen space-x-2'>
        <LeftSideNav menuItems={menuItems} />
        <Tweets route="landingPage" />
        <RightSideNav content={rightBarContents} />
      </div>
    </main>
  )
}
