import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRouter } from 'next/router';

const LeftSideNav = ({ menuItems }) => {
    const router = useRouter()
    // console.log(router)
    return (
        <div className="h-screen lg:w-[10%] xl:min-w-[25%] border hidden md:block border-gray-300">
            <div className="p-10 pl-20 w-full space-y-3">
                <div className='border'>
                </div>
                {
                    menuItems.map(({ icon, text, href }) =>
                        <Link key={text} href={href} className={`flex xl:justify-start space-x-2 lg:justify-center px-5 py-2 rounded-3xl  ${router.asPath === `/${href}` ? "font-bold" : null}`}>
                            <FontAwesomeIcon icon={icon}  />
                            <span className="hidden xl:block">{text}</span>
                        </Link>
                    )
                }

            </div>
        </div>
    )
}

LeftSideNav.propTypes = {
    menuItems: PropTypes.array.isRequired,
};

export default LeftSideNav