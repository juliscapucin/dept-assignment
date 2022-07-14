import { useEffect } from "react";

import Link from "next/link";

import Layout from "../components/Layout";

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout title='Services'>
      <div className='services__container'>
        <h2>Services</h2>
        <Link href='/'>Go back to Home Page</Link>
      </div>
    </Layout>
  );
}
