import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useEffect, useState } from "react";

import Logo from "./logo.svg";

export default function Footer() {
  const [footerLinks, setFooterLinks] = useState([]);

  const queryData = async () => {
    const client = new ApolloClient({
      uri: "http://dept.wordpresssites.host/graphql",
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

  console.log(footerLinks);

  return (
    <footer className='footer__container'>
      <div className='footer__scroll__top'>
        <div className='footer__arrow'>
          <img src='./icons/arrow-top.svg' alt='Scroll to top' />
        </div>
        <h4>TOP</h4>
      </div>
      <div className='footer__container__top'>
        <div className='footer__logo__container'>
          <div className='footer__logo'>
            <Logo width={100} height={40} viewBox='-100 -50 800 200' />
          </div>
        </div>
        <nav className='footer__navbar'>
          <ul>
            {footerLinks.map((link, index) => {
              return <li key={index}>{link.title}</li>;
            })}
          </ul>
        </nav>
      </div>
      <div className='footer__container__bottom'>
        <p>Chamber of Commerce: 63464101 </p>
        <p>VAT: NL 8552.47.502.B01</p>
        <p>Terms and conditions</p>
        <p>© 2022 Dept Agency</p>
      </div>
    </footer>
  );
}
