//import { useRouter } from 'next/router';
export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  const paths = data.map((curElem) => {
    return {
      params: {
        pageNo: curElem.id.toString(),
      }
    }
  })
  return {
    paths,
    fallback: false
  };
}
export const getStaticProps = async (context) => {
  const id = context.params.pageNo;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
const pageNo = ({ data }) => {
  // const router = useRouter();
  // const pageNumber = router.query.pageNo;
  return (
    // <div>
    //   <h1>my blog {pageNumber}</h1>
    // </div>
    <>
      <h3>{data.id}</h3>
      <h2>{data.body}</h2>
    </>
  );
}

export default pageNo;