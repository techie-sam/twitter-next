import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import twitterLogo from '../../assets/twitter.png';

const LeftSideNav = ({ LEFT_SIDENAV_CONTENT }) => {
    return (
        <div className="h-screen lg:w-[10%] xl:w-[30%] border hidden md:block border-gray-300">
            <div className="p-10 pl-20 w-full space-y-3">
                <div className='border'>
                    {/* <img src={twitterLogo} alt="Twitter Logo" className="w-[30px]" srcSet="" /> */}
                </div>
                {
                    LEFT_SIDENAV_CONTENT.map(({ icon, text }) =>
                        <a key={text} href='#'  className="flex xl:justify-start space-x-2 lg:justify-center text-xl px-5 py-2 rounded-3xl hover:bg-gray-200 active:font-extrabold focus:font-extrabold">
                            <FontAwesomeIcon icon={icon} className='align-start' />
                            <span className="hidden xl:block">{text}</span>
                        </a>
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