import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import BurgerMenus from "./BurgerMenus";
// import ShopingCart from './ShopingCart';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  const router = useRouter();
  const [path, setPath] = useState("");
  useEffect(() => {
    setPath(router.pathname);
  }, [router]);

  // Sticky Menu Area start
  useEffect(() => {
    window.addEventListener("scroll", sticky);
    return () => {
      window.removeEventListener("scroll", sticky);
    };
  });

  const sticky = (e) => {
    const header = document.querySelector(".header__area");
    const scrollTop = window.scrollY;
    scrollTop >= 1 ? header.classList.add("sticky") : header.classList.remove("sticky");
  };
  // Sticky Menu Area End

  return (
    <React.Fragment>
      <Head>
        <title>TaouGlobalAcademy - Discover world’s best courses </title>
        <link href="https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <header>
        <div id="header-sticky" className="header__area header__tranparent header__padding">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-2 col-sm-4 col-6">
                <div className="header__left d-flex">
                  <div className="logo">
                    <Link href="/">
                      <a>
                        <img className="logoImage" src="assets/img/logo/tau-globalacademy-logo.png" alt="tauglobal academy logo" />
                      </a>
                    </Link>
                  </div>                  
                </div>
              </div>
              <div className="col-xxl-9 col-xl-9 col-lg-8 col-md-10 col-sm-8 col-6">
                <div className="header__right d-flex justify-content-end justify-content-end align-items-center">
                  <div className="main-menu d-none d-xl-block">
                    <nav id="mobile-menu">
                      <ul>
                        <li className="mx-3">
                          <Link href="/">
                            <a>Home</a>
                          </Link>
                        </li>
                        <li className="has-dropdown mx-3">
                          <Link href="#coursetabs">
                            <a>Major Faculties</a>
                          </Link>
                          <ul className="submenu">
                            <li>
                              <Link href="#coursetabs">IT &amp; Software</Link>
                            </li>
                            <li>
                              <Link href="#coursetabs">
                                <a>Languages</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="#coursetabs">
                                <a>Healthcare</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="#coursetabs">
                                <a>Travel Advisory</a>
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li className="has-dropown mx-3">
                          <Link href="/">
                            <a>Blog</a>
                          </Link>
                        </li>

                        <li className="has-dropown mx-3">
                          <Link href="#reviews">
                            <a>Testimonials</a>
                          </Link>
                        </li>

                        <li className="has-dropown mx-3">
                          <Link href="/">
                            <a>Life At TGA</a>
                          </Link>
                        </li>

                        <li>
                          <Link href="/contact">
                            <a>Contact</a>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>

                  <div className="sidebar__menu d-xl-none">
                    <div
                      className="sidebar-toggle-btn ml-30"
                      id="sidebar-toggle"
                      onClick={() => {
                        setMenuOpen(!menuOpen);
                      }}
                    >
                      <span className="line"></span>
                      <span className="line"></span>
                      <span className="line"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <BurgerMenus menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div onClick={() => setMenuOpen(false)} className={menuOpen ? "body-overlay show" : "body-overlay"}></div>        
      </header>
    </React.Fragment>
  );
};

export default Header;
