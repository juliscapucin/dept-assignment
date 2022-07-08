import Image from "next/image";

import Layout from "../components/Layout";

const placeholderImage = "/image-placeholder.svg";

export default function Home() {
  return (
    <Layout>
      <main className='main'>
        <div className='hero'>
          <div className='hero-img-container'>
            <div className='hero-img'>
              <Image
                src={placeholderImage}
                alt={"Hero image"}
                // src={url ?? placeholderImage}
                // alt={name ?? "Hero image"}
                layout='fill'
                objectFit='cover'
                objectPosition='center center'
                priority
              />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
