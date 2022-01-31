import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
const ErrorPage = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 5000);
  }, []);
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