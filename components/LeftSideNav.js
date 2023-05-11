import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';
import { useRouter } from 'next/router';

// import twitterLogo from '../../assets/twitter.png';
// const menuItems = [
//     { icon: faHouse, text: "Home" },
//     { icon: faHashtag, text: "Explore" },
//     { icon: faUserGroup, text: "Communities" },
//     { icon: faBell, text: "Notifications" },
//     { icon: faMessage, text: "Messages" },
//     { icon: faSave, text: "Bookmarks" },
//     { icon: faUser, text: "Profile" },
//     { icon: faHamburger, text: "More" },
// ]
const LeftSideNav = ({menuItems}) => {
    const router = useRouter()
    console.log(router)
    return (
        <div className="h-screen lg:w-[10%] xl:min-w-[25%] border hidden md:block border-gray-300">
            <div className="p-10 pl-20 w-full space-y-3">
                <div className='border'>
                    {/* <img src={twitterLogo} alt="Twitter Logo" className="w-[30px]" srcSet="" /> */}
                </div>
                {
                    
                    menuItems.map(({ icon, text, href }) =>
                        <Link key={text} href={href} className={`flex xl:justify-start space-x-2 lg:justify-center text-xl px-5 py-2 rounded-3xl  ${router.asPath === `/${href}`? "font-bold":""}`}>
                            {/* {href} */}
                            <FontAwesomeIcon icon={icon} className='align-start' />
                            <span className="hidden xl:block">{text}</span>
                        </Link>
                    )
                }

            </div>
        </div>
    )
}

LeftSideNav.propTypes = {
    LEFT_SIDENAV_CONTENT: PropTypes.array.isRequired,
};

export default LeftSideNav