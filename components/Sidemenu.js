import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useEffect, useState } from "react";

import Link from "next/link";

import ArrowSidemenu from "./ArrowSidemenu";
import CountrySelect from "./CountrySelect";
import LogoDept from "./LogoDept";

export default function SideMenu() {
  const [sidemenuLinks, setSidemenuLinks] = useState([]);

  const queryData = async () => {
    const client = new ApolloClient({
      uri: "https://dept.wordpresssites.host/graphql",
      cache: new InMemoryCache(),
    });

    try {
      const { data } = await client.query({
        query: gql`
          query SideMenu {
            sidemenus {
              nodes {
                sidemenuLink {
                  sidemenulinks
                }
                title
              }
            }
          }
        `,
      });

      setSidemenuLinks(data.sidemenus.nodes);
    } catch (error) {
      console.log("Error");
    }
  };

  useEffect(() => {
    queryData();
  }, []);

  return (
    <nav className='sidemenu__container'>
      <div className='sidemenu__logodept'>
        <LogoDept />
      </div>
      <CountrySelect />
      <ul className='sidemenu__links__container'>
        <li className='sidemenu__link'>
          <Link href='/'>
            <a>
              <div className='sidemenu__link__content'>
                <div className='sidemenu__link__arrow'>
                  <ArrowSidemenu />
                </div>
                <h2>Home</h2>
              </div>
            </a>
          </Link>
        </li>
        {sidemenuLinks.map((link, index) => {
          return (
            <li key={index} className='sidemenu__link'>
              <Link href={link.sidemenuLink.sidemenulinks}>
                <a>
                  <div className='sidemenu__link__content'>
                    <div className='sidemenu__link__arrow'>
                      <ArrowSidemenu />
                    </div>
                    <h2>{link.title}</h2>
                  </div>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
