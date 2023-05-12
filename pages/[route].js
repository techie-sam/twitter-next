import LeftSideNav from "@/components/LeftSideNav";
import RightSideNav from "@/components/RightSideNav";
import Tweets from "@/components/Tweets";
import { faBell, faHamburger, faHashtag, faHouse, faMessage, faSave, faUser } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";

const PageType = ({ menuItems, bottomNavContent, title }) => {
    return (
        <>
            <Head>
                <title>{title.toUpperCase()}</title>
            </Head>
            <div className='flex justify-center h-screen'>
                <LeftSideNav menuItems={menuItems} />
                <Tweets bottomNavContent={bottomNavContent} />
                <RightSideNav />
            </div>
        </>
    );
}


export async function getStaticProps({ params }) {

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
        { text: faUser, href: "messges" },
    ]

    return {
        props: {
            title: params.route,
            menuItems,
            bottomNavContent
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