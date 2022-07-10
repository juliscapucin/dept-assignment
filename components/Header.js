import { useEffect, useState } from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import Link from "next/link";

import MenuButton from "./MenuButton";
import DeptLogo from "./DeptLogo";

import SideMenu from "./SideMenu";

export default function Header({ showSideMenu, setShowSideMenu }) {
  const [navLinks, setNavLinks] = useState([]);

  const queryData = async () => {
    const client = new ApolloClient({
      uri: "https://dept.wordpresssites.host/graphql",
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
        {/* <button onClick={() => setShowSideMenu(!showSideMenu)}>
          <ButtonMore />
        </button> */}
        <div className={`header__burger__btn ${showSideMenu && "active"}`}>
          <button onClick={() => setShowSideMenu(!showSideMenu)}>
            <MenuButton isSideMenuOpen={showSideMenu} />
          </button>
        </div>
      </nav>
      <div className={`header__sidemenu ${showSideMenu && "active"}`}>
        <SideMenu />
      </div>
    </header>
  );
}
