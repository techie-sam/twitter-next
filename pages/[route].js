import LeftSideNav from "@/components/LeftSideNav";
import RightSideNav from "@/components/RightSideNav";
import Tweets from "@/components/Tweets";
import { faBell, faHamburger, faHashtag, faHouse, faMessage, faSave, faUser, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";

const menuItems = [
    { icon: faHouse, text: "Home", href: "home" },
    { icon: faHashtag, text: "Explore", href: "explore" },
    { icon: faBell, text: "Notifications", href: "notifications" },
    { icon: faMessage, text: "Messages", href: "messages" },
    { icon: faSave, text: "Bookmarks", href: "bookmarks" },
    { icon: faUser, text: "Profile", href: "profile" },
    { icon: faHamburger, text: "More", href: "more" },
]

const bottomNavContent = [
    { text: faHouse, href: "home" },
    { text: faBell, href: "notifications" },
    { text: faMessage, href: "messages" },
    { text: faUser, href: "messages" },
]


const PageType = () => {
    return (
        <>
            <Head>

            </Head>
            <div className='flex justify-center h-screen space-x-2'>
                <LeftSideNav menuItems={menuItems} />
                <Tweets bottomNavContent={bottomNavContent} />
                <RightSideNav />
            </div>
        </>
    );
}


export async function getStaticProps({ params }) {
    return {
        props: {
            title: params.route,
            params
        }
    }
}

export async function getStaticPaths() {
    const paths = [
        { params: { route: "home" } },
        { params: { route: 'explore' } },
        { params: { route: 'notifications' } },
        { params: { route: 'messages' } },
        { params: { route: 'bookmarks' } },
        { params: { route: 'profile' } },
        { params: { route: 'more' } }
    ];
    return {
        paths,
        fallback: false
    };
}
export default PageType;