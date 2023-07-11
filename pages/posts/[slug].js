import Head from 'next/head';
import PostContent from '../../component/posts/post-detail/post-content';
import { getPostData, getPostsFiles } from '../../lib/posts-util';

const PostDetailsPage = ({ posts }) => {
    return (
        <>
            <Head>
                <title>{posts.title}</title>
                <meta name="description" content={posts.excerpt} />
            </Head>
            <PostContent posts={posts} />;
        </>
    );
};

export function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;

    const postData = getPostData(slug);

    return {
        props: {
            posts: postData,
        },
        revalidate: 600,
    };
}

export function getStaticPaths() {
    const postFileName = getPostsFiles();

    const slugs = postFileName.map((fileName) => fileName.replace(/\.md$/, ''));

    return {
        paths: slugs.map((slug) => ({ params: { slug: slug } })),
        fallback: false,
    };
}

export default PostDetailsPage;
