import { useEffect } from "react";

import Link from "next/link";

import Layout from "../components/Layout";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout title='Contact'>
      <div className='contact__container'>
        <h2>Contact</h2>
        <Link href='/'>Go back to Home Page</Link>
      </div>
    </Layout>
  );
}
