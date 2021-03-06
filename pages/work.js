import { useEffect } from "react";

import Link from "next/link";

import Layout from "../components/Layout";

export default function Work() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout title='Work'>
      <div className='work__container'>
        <h2>Work</h2>
        <Link href='/'>Go back to Home Page</Link>
      </div>
    </Layout>
  );
}
