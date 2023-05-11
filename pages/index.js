// import Image from 'next/image'
import LeftSideNav from '@/components/LeftSideNav'
import RightSideNav from '@/components/RightSideNav'
import Tweets from '@/components/Tweets'
import { faGear, faHashtag } from "@fortawesome/free-solid-svg-icons";
// import { useRouter } from 'next/router';




// const rightBarContents = [
//   { link: "#", text: "Sign in as" },
//   { link: "#", text: "Sign Up With Apple" },
//   { link: "#", text: "Create Account" },
// ]


export default function Home({ menuItems, bottomNavContent }) {
  console.log(props);
  return (
    <main className='flex justify-center h-screen space-x-2'>
      <LeftSideNav menuItems={menuItems} />
      <Tweets bottomNavContent={bottomNavContent} />
      <RightSideNav />
    </main>
  )
}
export function getStaticProps() {

  const menuItems = [
    { icon: faHashtag, text: "Explore", href: "/" },
  ]

  const bottomNavContent = [
    { text: "Login", href: "login" },
    { text: "NavBar", href: "navbar" }
  ]

  return {
    props: {
      menuItems,
      bottomNavContent
    },
  }

}
