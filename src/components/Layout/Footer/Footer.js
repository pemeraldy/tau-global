import React from "react";
import FooterBottom from "./FooterBottom";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="footer__area footer-bg">
        <div className="footer__top pt-190 pb-40">
          <div className="container">
            <div className="row">
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="footer__widget mb-50">
                  <div className="footer__widget-head mb-22">
                    <div className="footer__logo">
                      <Link href="/">
                        <a>
                          <img width="77" src="/assets/img/logo/tau-globalacademy-logo.png" alt="img not found" />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="footer__widget-body">
                    <p>We provide first class capacity development programs that enhance your employability locally and internationally</p>
                  </div>
                </div>
              </div>
              {/* <div className="col-xxl-2 offset-xxl-1 col-xl-2 offset-xl-1 col-lg-3 offset-lg-0 col-md-2 offset-md-1 col-sm-5 offset-sm-1">
                  <div className="footer__widget mb-50">
                    <div className="footer__widget-head mb-22">
                      <h3 className="footer__widget-title">TAU Global Academy</h3>
                    </div>
                    <div className="footer__widget-body">
                      <div className="footer__link">
                        <ul>
                          <li>
                            <Link href="/about">
                              <a>About</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/courses">
                              <a>Courses</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/">
                              <a>Blog</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/contact">
                              <a>Contact</a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div> */}

              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="footer__widget footer__pl-70 mb-50">
                  <div className="footer__widget-head mb-22">
                    <h3 className="footer__widget-title">Contacts</h3>
                  </div>
                  <div className="footer__widget-body">
                    <div className="footer__subscribe">
                      <div style={{ marginTop: "41px" }}>
                        <div className="footer__social">
                          <ul>
                            <li>
                              <a href="https://facebook.com/Tauglobalacademy" target="_blank">
                                <i className="fab fa-facebook-f"></i>
                              </a>
                            </li>
                            <li>
                              <a href="https://twitter.com/Tauglobalabuja" target="_blank" className="tw">
                                <i className="fab fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="https://instagram.com/Tauglobal_academy" target="_blank" className="in">
                                <i className="fab fa-instagram"></i>
                              </a>
                            </li>
                            {/* <li><a href="#" className="pin"><i className="fab fa-pinterest-p"></i></a></li> */}
                          </ul>
                          <div className="mt-4 flex">
                            <p className="m-0">
                              <span style={{ width: "20px", height: "20px" }} className="in">
                                <i className="fa fa-phone"></i>
                              </span>
                              <span style={{ fontSize: "16px" }} className="ml-10">
                                +2349133349378
                              </span>
                            </p>
                            <p className="mt-2">
                              <span className="in">
                                <i className="fa fa-phone"></i>
                              </span>
                              <span style={{ fontSize: "16px" }} className="ml-10">
                                +2349044455413
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="footer__widget footer__pl-70 mb-50">
                  <div className="footer__widget-head mb-22">
                    <h3 className="footer__widget-title">Address</h3>
                  </div>
                  <div className="footer__widget-body">
                    <div className="footer__subscribe">
                      <div style={{ marginTop: "41px" }}>
                        {/* <h4>Address</h4> */}
                        <p>
                          <a target="_blank" href="https://goo.gl/maps/dUK9ZuQm3xNkVu158">
                            No. 519 Zunger Street, 4th Avenue, Gwarinpa, Abuja.
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <FooterBottom /> */}
      </div>
    </footer>
  );
};

export default Footer;
