import Link from "next/link";

import Layout from "../components/Layout";

export default function Services() {
  return (
    <Layout title='Services'>
      <div className='services__container'>
        <h2>Services</h2>
        <Link href='/'>Go back to Home Page</Link>
      </div>
    </Layout>
  );
}
