import PostFeed from '@components/PostFeed';
import Metatags from '@components/Metatags';
import Loader from '@components/Loader';
import { firestore, fromMillis, postToJSON } from '@lib/firebase';

import { useState } from 'react';

// Max post to query per page
const LIMIT = 10;

export async function getServerSideProps(context) {
  const postsQuery = firestore
    .collectionGroup('posts')
    .where('published', '==', true)
    .orderBy('createdAt', 'desc')
    .limit(LIMIT);

  const posts = (await postsQuery.get()).docs.map(postToJSON);

  return {
    props: { posts }, // will be passed to the page component as props
  };
}

export default function Home(props) {
  const [posts, setPosts] = useState(props.posts);
  const [loading, setLoading] = useState(false);

  const [postsEnd, setPostsEnd] = useState(false);

  // Get next page in pagination query
  const getMorePosts = async () => {
    setLoading(true);
    const last = posts[posts.length - 1];

    const cursor = typeof last.createdAt === 'number' ? fromMillis(last.createdAt) : last.createdAt;

    const query = firestore
      .collectionGroup('posts')
      .where('published', '==', true)
      .orderBy('createdAt', 'desc')
      .startAfter(cursor)
      .limit(LIMIT);

    const newPosts = (await query.get()).docs.map((doc) => doc.data());

    setPosts(posts.concat(newPosts));
    setLoading(false);

    if (newPosts.length < LIMIT) {
      setPostsEnd(true);
    }
  };

  return (
    <main>
      <Metatags title="Home Page" description="Get the latest posts on our site" />
      <div class='row'>
       <div class='col-6 col-s-9 margin-vertical-8'>
        <div class='center'>
        <h1>Health Monitoring <span class='gradient-text'>System</span></h1>
        <p class='padding-horizontal-2'>This system is a <span class='text-yellow-500 font-bold'>remote</span> platform to <span class='text-pink-500 font-bold'>monitor</span> health anytime and anywhere.</p>
       </div>
       </div>
       <div class='col-6 col-s-9'>
        <img src='/dashboard.svg' class='center  padding-6'></img>
       </div>
      </div>

      <div className="card card-info">
        <h2>💡 Health Monitoring System</h2>
        <p>Welcome! This app is built with Next.js and Google Database and is loosely inspired by Dev.to.</p>
        <p>Sign up for an 👨‍🎤 account, ✍️ get Temprature, then 💞 heart rate content . All public content is server-rendered and search-engine optimized.</p>
      </div>
     
      <PostFeed posts={posts} />

      {!loading && !postsEnd && <button onClick={getMorePosts}>Load more</button>}

      <Loader show={loading} />

      {postsEnd && 'You have reached the end!'}
    </main>
  );
}
