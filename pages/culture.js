import Link from "next/link";

import Layout from "../components/Layout";

export default function Culture() {
  return (
    <Layout title='Culture'>
      <div className='culture__container'>
        <h2>Culture</h2>
        <Link href='/'>Go back to Home Page</Link>
      </div>
    </Layout>
  );
}
