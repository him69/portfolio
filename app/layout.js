import Head from 'next/head'; // Use 'next/head' for script inclusion
import '@/styles/globals.css'; // Global CSS

export const metadata = {
  title: 'My Portfolio',
  description: 'Himanshu’s Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Head>
          <script
            src="https://cdn.jsdelivr.net/npm/@framer/gradient@latest/dist/gradient.js"
            defer
          ></script>
        </Head>
        {children}
      </body>
    </html>
  );
}
