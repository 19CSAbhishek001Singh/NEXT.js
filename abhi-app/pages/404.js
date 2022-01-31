import Link from 'next/link';
const ErrorPage = () => {
  return (
    <>
      <h1>this page is not found go here</h1>
      <div>
        <Link href='/'>
          <a>Home Page</a>
        </Link>
      </div>
    </>
  );
}

export default ErrorPage;