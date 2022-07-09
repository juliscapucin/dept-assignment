import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useEffect, useState } from "react";

export default function SideMenu() {
  const [sidemenuLinks, setSidemenuLinks] = useState([]);

  const queryData = async () => {
    const client = new ApolloClient({
      uri: "http://dept.wordpresssites.host/graphql",
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
      <button className='sidemenu__close__btn'></button>
      <ul className='sidemenu__links__container'>
        {sidemenuLinks.map((link, index) => {
          return <li key={index}>{link.title}</li>;
        })}
      </ul>
    </nav>
  );
}
