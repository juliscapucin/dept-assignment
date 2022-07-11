import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useEffect, useState } from "react";

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
        {sidemenuLinks.map((link, index) => {
          return (
            <li key={index}>
              <h2>{link.title}</h2>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
