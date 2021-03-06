import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useEffect, useState } from "react";

import Link from "next/link";

import LogoDept from "./LogoDept";
import Facebook from "./icons/Facebook";
import Instagram from "./icons/Instagram";
import Twitter from "./icons/Twitter";

export default function Footer() {
  const [footerLinks, setFooterLinks] = useState([]);

  const year = new Date().getFullYear();

  const queryData = async () => {
    const client = new ApolloClient({
      uri: "https://dept.wordpresssites.host/graphql",
      cache: new InMemoryCache(),
    });

    try {
      const { data } = await client.query({
        query: gql`
          query FooterNav {
            footerNavs {
              nodes {
                title
                footerLink {
                  footerLink
                }
              }
            }
          }
        `,
      });

      setFooterLinks(data.footerNavs.nodes);
    } catch (error) {
      console.log("Error");
    }
  };

  useEffect(() => {
    queryData();
  }, []);

  return (
    <footer className='footer__container'>
      <button
        className='footer__scroll__top'
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      >
        <div className='footer__arrow'>
          <img src='./icons/arrow-top.svg' alt='Scroll to top' />
        </div>
        <h6>TOP</h6>
      </button>
      <div className='footer__container__top'>
        <div className='footer__logo__container'>
          <div className='footer__logo'>
            <LogoDept />
          </div>
        </div>
        <div className='footer__socials'>
          <Facebook />
          <Twitter />
          <Instagram />
        </div>
        <nav className='footer__navbar'>
          <ul>
            {footerLinks.map((link, index) => {
              return (
                <li key={index}>
                  <Link href={link.footerLink.footerLink}>
                    <a>{link.title}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className='footer__container__bottom'>
        <p>Chamber of Commerce: 63464101 </p>
        <p>VAT: NL 8552.47.502.B01</p>
        <p>Terms and conditions</p>
        <p>?? {year} Dept Agency</p>
      </div>
    </footer>
  );
}
