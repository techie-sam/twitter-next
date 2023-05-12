import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";


const Tweets = ({ bottomNavContent }) => {
    const route = useRouter()
    return (
        <div className="relative max-h-screen w-[90%] md:w-[50w] border-r border-l border-gray-300  overflow-y-auto bg-white dark:bg-gray-900">
            <nav className="fixed bottom-0">
                <ul className="flex space-x-4 justify-evenly">
                    {
                        bottomNavContent.map(({ text, href }) =>
                            <li key={href} >
                                <Link href={href}>
                                    {route.asPath === "/" ? text : <FontAwesomeIcon icon={text} />}
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </nav>
            <nav className="w-full border-b bg-white bg-opacity-50 backdrop-blur-lg border-gray-300 sticky top-0">
                {
                    route.asPath === "/" &&
                    <div className="flex justify-between text-2xl p-5">
                        <h3>Explore</h3>
                        <FontAwesomeIcon icon={faGear} />
                    </div>
                }
                {
                    route.asPath === "/home" &&
                    <>
                        <h3 className="text-2xl font-bold p-5 hidden md:block">Home</h3>
                        <div className="text-center w-full flex">
                            <a href="#" className="p-5 w-full hover:bg-gray-200">For You</a>
                            <a href="#" className="p-5 w-full hover:bg-gray-200">Following</a>
                        </div>
                    </>
                }
                {
                    route.asPath === "/explore" &&
                    <>
                        <ul className="sticky">
                            <input type="text" placeholder="Search" className="w-full pl-10 pr-4 py-2 rounded-2xl bg-gray-200 focus:outline-none focus:border-blue-500 border" />
                            <div className="absolute inset-y-0 pl-3 left-0 flex items-center ">
                                <i className="fas fa-search"></i>
                            </div>
                        </ul>
                    </>
                }
                {
                    route.asPath === "/notifications" &&
                    <>
                        <Link href="notifications">
                            <h3 className="font-bold px-5 py-3 hidden md:block">Notifications</h3>
                        </Link>
                    </>
                }
            </nav>
            <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">

            </div>
        </div>
    )
}


export default Tweets