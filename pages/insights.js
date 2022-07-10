import Link from "next/link";

import Layout from "../components/Layout";

export default function Insights() {
  return (
    <Layout title='Insights'>
      <div className='insights__container'>
        <h2>Insights</h2>
        <Link href='/'>Go back to Home Page</Link>
      </div>
    </Layout>
  );
}
