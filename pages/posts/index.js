import Head from 'next/head';
import AllPosts from '../../component/posts/all-posts';
import { getAllPosts } from '../../lib/posts-util';

const AllPostsPage = ({ posts }) => {
    return (
        <>
            <Head>
                <title>All my Posts</title>
                <meta name="description" content="A list of all programmind-related tutorial and posts" />
            </Head>
            <AllPosts posts={posts} />;
        </>
    );
};

export function getStaticProps() {
    const allPosts = getAllPosts();

    return {
        props: {
            posts: allPosts,
        },
    };
}

export default AllPostsPage;
