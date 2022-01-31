import Navbar from '../pages/components/Navbar';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
const index = ({ data }) => {
  return (
    <div>
      <Head>
        <title>my page</title>
      </Head>
      <h1> Hello Abhishek</h1>
      <Navbar />
      <Image src="https://images.unsplash.com/photo-1612646785818-defa3c0c19f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" width="500" height="500"></Image>
      {data.slice(0, 5).map((curElem) => {
        return (
          <div key={curElem.id}>
            <h3>{curElem.id}</h3>
            <Link href={`/blog/${curElem.id}`}>
              <h2>{curElem.title}</h2>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default index;