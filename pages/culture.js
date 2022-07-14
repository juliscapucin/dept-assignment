import { useEffect } from "react";

import Link from "next/link";

import Layout from "../components/Layout";

export default function Culture() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout title='Culture'>
      <div className='culture__container'>
        <h2>Culture</h2>
        <Link href='/'>Go back to Home Page</Link>
      </div>
    </Layout>
  );
}
