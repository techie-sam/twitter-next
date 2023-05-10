import LeftSideNav from "@/components/LeftSideNav";
import RightSideNav from "@/components/RightSideNav";
import Tweets from "@/components/Tweets";
import Head from "next/head";

// eslint-disable-next-line @next/next/no-typos
export async function getStaticPaths() {
    const paths = [
        { params: { route: "home" } },
        { params: { route: 'about' } },
        { params: { route: 'services' } }
    ];
    return {
        paths,
        fallback: false
    };
}


export async function getStaticProps({ params }) {
    return {
        props: {
            title: params.route,
            params
        }
    }
}


// getStatiPaths()
const PageType = ({ params }) => {
    console.log(params)
    return (
        <>
            <Head>

            </Head>
            <div className='flex justify-center h-screen space-x-2'>
                <LeftSideNav />
                <Tweets />
                <RightSideNav />
            </div>
        </>
    );
}
// export const getStaticProps = (contex) => {
//     // console.log(contex)
// }
// getStaticProps()
export default PageType;