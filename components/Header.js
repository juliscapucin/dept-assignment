import { useEffect, useState } from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import Link from "next/link";

import BurgerButton from "./BurgerButton";
import DeptLogo from "./DeptLogo";

import SideMenu from "./SideMenu";

export default function Header({ showSideMenu, setShowSideMenu }) {
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

  return (
    <header className='header'>
      <div className='header__logo__container'>
        <Link href='/'>
          <a>
            <div className='header__logo'>
              <DeptLogo fill='ffffff' />
              {/* <DeptLogo fill={window.innerWidth > 992 ? "ffffff" : "000000"} /> */}
            </div>
          </a>
        </Link>
      </div>
      <nav className='navbar'>
        <ul>
          {navLinks.map((link, index) => {
            return (
              <li key={index}>
                <Link href={`/${link.navbarACF.link}`}>
                  <a>{link.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className='header__more__btn'>
          <div className='header__more__circle'></div>
          <div className='header__more__circle'></div>
          <div className='header__more__circle'></div>
        </div>
        <div className={`header__burger__button ${showSideMenu && "active"}`}>
          <button onClick={() => setShowSideMenu(!showSideMenu)}>
            <BurgerButton isSideMenuOpen={showSideMenu} />
          </button>
        </div>
      </nav>
      <div className={`header__sidemenu ${showSideMenu && "active"}`}>
        <SideMenu />
      </div>
    </header>
  );
}
