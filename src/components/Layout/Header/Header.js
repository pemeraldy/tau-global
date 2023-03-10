import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import BurgerMenus from './BurgerMenus';
// import ShopingCart from './ShopingCart';

const Header = () => {

   const [menuOpen, setMenuOpen] = useState(false)
   const [shopOpen, setShopOpen] = useState(false)

   const router = useRouter()
   const [path, setPath] = useState("")
   useEffect(() => { 
      setPath(router.pathname)
   }, [router])

   // Sticky Menu Area start
   useEffect(() => {
      window.addEventListener('scroll', sticky);
      return () => {
         window.removeEventListener('scroll', sticky);
      };
   });

   const sticky = (e) => {
      const header = document.querySelector('.header__area');
      const scrollTop = window.scrollY;
      scrollTop >= 1 ? header.classList.add('sticky') : header.classList.remove('sticky');
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
                         <img className="logoImage" src="/assets/img/logo/tau-blobal-yellow.jpeg" alt="tauglobal academy logo" />
                       </a>
                     </Link>
                   </div>
                   {/* <div className="header__category d-none d-lg-block">
                              <nav>
                                 <ul>
                                    <li>
                                       <Link href="/course-grid"><a className="cat-menu d-flex align-items-center">
                                          <div className="cat-dot-icon d-inline-block">
                                             <svg viewBox="0 0 276.2 276.2">
                                                <g>
                                                   <g>
                                                      <path className="cat-dot" d="M33.1,2.5C15.3,2.5,0.9,17,0.9,34.8s14.5,32.3,32.3,32.3s32.3-14.5,32.3-32.3S51,2.5,33.1,2.5z" />
                                                      <path className="cat-dot" d="M137.7,2.5c-17.8,0-32.3,14.5-32.3,32.3s14.5,32.3,32.3,32.3c17.8,0,32.3-14.5,32.3-32.3S155.5,2.5,137.7,2.5    z" />
                                                      <path className="cat-dot" d="M243.9,67.1c17.8,0,32.3-14.5,32.3-32.3S261.7,2.5,243.9,2.5S211.6,17,211.6,34.8S226.1,67.1,243.9,67.1z" />
                                                      <path className="cat-dot" d="M32.3,170.5c17.8,0,32.3-14.5,32.3-32.3c0-17.8-14.5-32.3-32.3-32.3S0,120.4,0,138.2S14.5,170.5,32.3,170.5z" />
                                                      <path className="cat-dot" d="M136.8,170.5c17.8,0,32.3-14.5,32.3-32.3c0-17.8-14.5-32.3-32.3-32.3c-17.8,0-32.3,14.5-32.3,32.3    C104.5,156.1,119,170.5,136.8,170.5z" />
                                                      <path className="cat-dot" d="M243,170.5c17.8,0,32.3-14.5,32.3-32.3c0-17.8-14.5-32.3-32.3-32.3s-32.3,14.5-32.3,32.3    C210.7,156.1,225.2,170.5,243,170.5z" />
                                                      <path className="cat-dot" d="M33,209.1c-17.8,0-32.3,14.5-32.3,32.3c0,17.8,14.5,32.3,32.3,32.3s32.3-14.5,32.3-32.3S50.8,209.1,33,209.1z    " />
                                                      <path className="cat-dot" d="M137.6,209.1c-17.8,0-32.3,14.5-32.3,32.3c0,17.8,14.5,32.3,32.3,32.3c17.8,0,32.3-14.5,32.3-32.3    S155.4,209.1,137.6,209.1z" />
                                                      <path className="cat-dot" d="M243.8,209.1c-17.8,0-32.3,14.5-32.3,32.3c0,17.8,14.5,32.3,32.3,32.3c17.8,0,32.3-14.5,32.3-32.3    S261.6,209.1,243.8,209.1z" />
                                                   </g>
                                                </g>
                                             </svg>
                                          </div>
                                          <span>Category</span>
                                       </a>
                                       </Link>
                                       <ul className="cat-submenu">
                                          <li><Link href="/course-grid"><a>English Learning</a></Link></li>
                                          <li><Link href="/course-grid"><a>Web Development</a></Link></li>
                                          <li><Link href="/course-grid"><a>Logo Design</a></Link></li>
                                          <li><Link href="/course-grid"><a>Motion Graphics</a></Link></li>
                                          <li><Link href="/course-grid"><a>Video Edition</a></Link></li>
                                       </ul>
                                    </li>
                                 </ul>
                              </nav>
                           </div> */}
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
                           <Link href={router.pathname === "/" ? "#categoriez" : "/#categoriez"}>
                             <a>Major Faculties</a>
                           </Link>
                           <ul className="submenu">
                             <li>
                               <Link href={router.pathname === "/" ? "#coursetabs" : "/#coursetabs"}>IT &amp; Software</Link>
                             </li>
                             <li>
                               <Link href={router.pathname === "/" ? "#coursetabs" : "/#coursetabs"}>
                                 <a>Languages</a>
                               </Link>
                             </li>
                             <li>
                               <Link href={router.pathname === "/" ? "#coursetabs" : "/#coursetabs"}>
                                 <a>Healthcare</a>
                               </Link>
                             </li>
                             <li>
                               <Link href={router.pathname === "/" ? "#coursetabs" : "/#coursetabs"}>
                                 <a>Travel Advisory</a>
                               </Link>
                             </li>
                           </ul>
                         </li>

                         {/* <li className="has-dropown mx-3">
                           <Link href="/">
                             <a>Blog</a>
                           </Link>
                         </li> */}

                         <li className="has-dropown mx-3">
                           <Link href={router.pathname === "/" ? "#reviews" : "/#reviews"}>
                             <a>Testimonials</a>
                           </Link>
                         </li>

                         <li className="has-dropown mx-3">
                           <Link href="#cowork">
                             <a>Co Working Space</a>
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

         {/* <ShopingCart shopOpen={shopOpen} setShopOpen={setShopOpen} /> */}
         {/* <div onClick={() => setShopOpen(false)} className={shopOpen ? "body-overlay show" : "body-overlay"}></div> */}
       </header>
     </React.Fragment>
   );
}

export default Header;