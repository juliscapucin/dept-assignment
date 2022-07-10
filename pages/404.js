import Link from "next/link";

import Layout from "../components/Layout";

export default function PageNotFound() {
  return (
    <Layout title='Page Not Found'>
      <div className='error__container'>
        <h1>Error!</h1>
        <h3>Sorry, this page does not exist.</h3>
        <Link href='/'>Go back to Home Page</Link>
      </div>
    </Layout>
  );
}
