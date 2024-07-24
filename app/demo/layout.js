// Layout.js
import Link from 'next/link';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/demo/home">
            Home
          </Link>
        </li>
        <li>
          <Link href="/demo/about">
            About
          </Link>
        </li>
        <li>
          <Link href="/demo">
            Demo
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <main style={{
        overflowX:'hidden'
      }}>{children}</main>
    </div>
  );
};

export default Layout;
