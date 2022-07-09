import { useEffect, useState } from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import BurgerButton from "./BurgerButton";
import Logo from "./logo.svg";

import SideMenu from "./SideMenu";

export default function Header() {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [navLinks, setNavLinks] = useState([]);

  const queryData = async () => {
    const client = new ApolloClient({
      uri: "http://dept.wordpresssites.host/graphql",
      cache: new InMemoryCache(),
    });

    try {
      const { data } = await client.query({
        query: gql`
          query Header {
            navbarLinks {
              nodes {
                title
                navbarACF {
                  link
                }
              }
            }
          }
        `,
      });

      setNavLinks(data.navbarLinks.nodes);
    } catch (error) {
      console.log("Error");
    }
  };

  useEffect(() => {
    queryData();
  }, []);

  console.log(navLinks);

  return (
    <header className='header'>
      <div className='header__logo__container'>
        <div className='header__logo'>
          <Logo width={100} height={40} viewBox='-100 -50 800 200' />
        </div>
      </div>
      <nav className='navbar'>
        <ul>
          {navLinks.map((link, index) => {
            return <li key={index}>{link.title}</li>;
          })}
        </ul>
        <div className='header__more__btn'>
          <div className='header__more__circle'></div>
          <div className='header__more__circle'></div>
          <div className='header__more__circle'></div>
        </div>
        <div className={`header__burger__button ${showSideMenu && "active"}`}>
          <button onClick={() => setShowSideMenu(!showSideMenu)}>
            <BurgerButton />
          </button>
        </div>
        <div className={`header__sidemenu ${showSideMenu && "active"}`}>
          <SideMenu />
        </div>
      </nav>
    </header>
  );
}
