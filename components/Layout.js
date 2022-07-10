import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();

  const [showSideMenu, setShowSideMenu] = useState(false);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta charSet='UTF-8' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
      </Head>

      <main
        className={`main__container ${
          showSideMenu ? "main__disable__scroll" : ""
        }`}
      >
        <Header showSideMenu={showSideMenu} setShowSideMenu={setShowSideMenu} />
        {children}
        <Footer />
      </main>
    </>
  );
}

Layout.defaultProps = {
  title: "Dept Agency",
  description:
    "Pioneering tech and marketing to help brands stay ahead. Find out more.",
  keywords: "photography, gallery, unsplash",
  link: "rel='icon' href='/favicon.ico'",
};
