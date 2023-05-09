import PropTypes from 'prop-types';
const RightSideNav = ({ RIGHT_SIDENAV_CONTENT, route }) => {
   
    return (
        <div className="h-full hidden xl:block md:w-[45vw] border border-gray-300 p-5">
            {
                route === "landingPage" &&
                <div className="p-5 border border-sm rounded-2xl">
                    <h3 className="text-xl font-extrabold">New to Twitter?</h3>
                    <p className="text-sm">Sign up now to get your own personalized timeline!</p>
                    <div className="space-y-3 mt-5">
                        {
                            RIGHT_SIDENAV_CONTENT.map(({ link, text }) =>
                                <a key={text} href={link}  className="block rounded-2xl bg-slate-50 p-4">{text} </a>
                            )
                        }
                        <p>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>
                    </div>
                </div>
            }
            {
                route === "mainApp" &&
                <>
                    <nav>
                        <ul className="sticky">
                        <input type="text" placeholder="Search" className="w-full pl-10 pr-4 py-2 rounded-2xl bg-gray-200 focus:outline-none focus:border-blue-500 border"/>
                            <div className="absolute inset-y-0 pl-3 left-0 flex items-center ">
                                <i className="fas fa-search"></i>
                            </div>
                        </ul>
                    </nav>
                </>
            }
        </div>
    )
}

RightSideNav.propTypes = {
    RIGHT_SIDENAV_CONTENT: PropTypes.array.isRequired,
    route: PropTypes.string.isRequired,
};


export default RightSideNav