import { useEffect } from "react";

import Link from "next/link";

import Layout from "../components/Layout";

export default function Insights() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout title='Insights'>
      <div className='insights__container'>
        <h2>Insights</h2>
        <Link href='/'>Go back to Home Page</Link>
      </div>
    </Layout>
  );
}
