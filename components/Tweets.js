import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PropTypes } from "prop-types";


const Tweets  =  ({ route }) => {
    // const scrollbar = import ('tailwind-scrollbar')
    // const consoleMe = async ()=>{
    //    await console.log(scrollbar)
    // }
    // consoleMe()
//    console.log(scrollbar)

    return (
        <div className="max-h-screen w-[90%] md:w-[50w] border border-gray-300  overflow-y-auto">
            <nav className="w-full border-b bg-white bg-opacity-50 backdrop-blur-lg border-gray-300 sticky top-0">
                {
                    route === "landingPage" &&
                    <div className="flex justify-between text-2xl p-5">
                        <h3>Explore</h3>
                        <FontAwesomeIcon icon={faGear} />
                    </div>
                }
                {
                    route === "mainApp" &&
                    <div className="">
                        <h3 className="text-2xl font-bold p-5 hidden md:block">Home</h3>
                        <div className="text-center w-full flex">
                            <a href="#" className="p-5 w-full hover:bg-gray-200">For You</a>
                            <a href="#" className="p-5 w-full hover:bg-gray-200">Following</a>
                        </div>
                    </div>
                }
            </nav>
            <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">

            </div>
        </div>
    )
}

Tweets.propTypes = {
    route: PropTypes.string.isRequired,
};

export default Tweets