import Link from "next/link";

import Layout from "../components/Layout";

export default function PageNotFound() {
  return (
    <Layout title='Page Not Found'>
      <div className='error__container'>
        <h3>Error!</h3>
        <h4>Sorry, this page does not exist.</h4>
        <Link href='/'>Go back to Home Page</Link>
      </div>
    </Layout>
  );
}
