import Link from "next/link";
import { useEffect } from "react";

import Layout from "../components/Layout";

export default function Careers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout title='Careers'>
      <div className='careers__container'>
        <h2>Careers</h2>
        <Link href='/'>Go back to Home Page</Link>
      </div>
    </Layout>
  );
}
