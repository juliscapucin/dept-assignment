import { useEffect, useState } from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import Link from "next/link";

import MenuButton from "./MenuButton";
import LogoDept from "./LogoDept";

import SideMenu from "./SideMenu";

export default function Header({ showSideMenu, setShowSideMenu }) {
  const [navLinks, setNavLinks] = useState([]);
  const [lastScroll, setLastScroll] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

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

  const stickyMenu = () => {
    const currentScroll = window.scrollY;

    if (currentScroll >= 100 && currentScroll > lastScroll) {
      setIsScrollingDown(true);
    } else if (
      currentScroll === 0 ||
      currentScroll < lastScroll ||
      currentScroll === lastScroll
    ) {
      setIsScrollingDown(false);
    } else {
      setIsScrollingDown(false);
    }

    setLastScroll(currentScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", stickyMenu);

    return () => {
      window.removeEventListener("scroll", stickyMenu);
    };
  });

  return (
    <header className={`header ${isScrollingDown ? "scroll__down" : ""}`}>
      <div className='header__logo__container'>
        <Link href='/' scroll={false}>
          <a>
            <div className='header__logo'>
              <LogoDept />
            </div>
          </a>
        </Link>
      </div>
      <nav className='navbar'>
        <ul>
          {navLinks.map((link, index) => {
            return (
              <li key={index}>
                <Link href={`/${link.navbarACF.link}`} scroll={false}>
                  <a>{link.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className={`header__burger__btn ${showSideMenu && "active"}`}>
          <button
            onClick={() => {
              setShowSideMenu(!showSideMenu);
              document.body.classList.toggle("body--disable-scroll");
            }}
          >
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
