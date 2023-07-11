import Head from 'next/head';
import FeaturedPosts from '../component/home-page/featured-posts';
import Hero from '../component/home-page/hero';
import { getFeaturedPosts } from '../lib/posts-util';

const HomePage = ({ posts }) => {
    return (
        <>
            <Head>
                <title>Ivan Blog</title>
                <meta name="description" content="I post about programming and web development" />
            </Head>
            <Hero />
            <FeaturedPosts posts={posts} />
        </>
    );
};

export function getStaticProps() {
    const featuredPosts = getFeaturedPosts();

    return {
        props: {
            posts: featuredPosts,
        },
    };
}

export default HomePage;
