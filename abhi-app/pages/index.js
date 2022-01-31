import Link from 'next/link';
const index = () => {
  return (
    <div>
      <h1> Hello Abhishek</h1>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default index;