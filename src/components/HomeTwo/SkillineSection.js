import React, { Component } from 'react';
import Link from 'next/link';

class Skilline extends Component {

    render() {

        return (
          <section className="what__area pt-115">
            <div className="container">
              <div className="row">
                <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                  <div className="section__title-wrapper mb-60 text-center">
                    <h2 className="section__title">
                      CO
                      <span className="yellow-bg-big">
                        WORKING SPACE <img src="assets/img/shape/yellow-bg-2.png" alt="img not found" />
                      </span>
                    </h2>
                    <p>We are Built for Business – Find your shared work station today! Find your Fully furnished and dedicated workstation or coworking space in our Abuja head office</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xxl-5 offset-xl-1 col-xl-5 offset-xl-1 col-lg-6">
                  <div className="what__item transition-3 mb-30 p-relative fix">
                    <div className="what__thumb w-img">
                      <img src="assets/img/banner/workstation.jpg" alt="coworking space" />
                    </div>
                  </div>
                </div>
                <div className="col-xxl-5 col-xl-5 col-lg-6">
                  <div className="what__item transition-3 mb-30 p-relative fix">
                    <div className="what__thumb w-img">
                      <img src="assets/img/banner/workstation.jpg" alt="coworking space" />
                    </div>
                    <div className="what__content p-absolute text-center">
                      <h3 className="what__title white-color"></h3>
                    </div>
                  </div>
                </div>
                <div className=" col-12 d-flex justify-content-center align-items-center">
                  <Link href="/contact">
                    <a className="e-btn">Get an office Space</a>
                    {/* <a className="e-btn e-btn-border-2">Get an office</a> */}
                  </Link>
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default Skilline;