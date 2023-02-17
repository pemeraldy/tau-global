import React, { Component } from 'react';
import Link from 'next/link';

class Hero extends Component {

    render() {

        return (
            <main>
                <section className="hero__area hero__height d-flex align-items-center grey-bg-2 p-relative">
                    <div className="hero__shape">                        
                        <img className="hero-1-circle-2" src="assets/img/shape/hero/hero-1-circle-2.png" alt="circle one"/>
                        <img className="hero-1-dot-2" src="assets/img/shape/hero/hero-1-dot-2.png" alt="circle two"/>
                    </div>
                    <div className="container">
                        <div className="hero__content-wrapper mt-90">
                            <div className="row align-items-center">
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                    <div className="hero__content p-relative z-index-1">
                                    <h3 className="hero__title">
                                        {/* <span>Access 2700+</span> */}
                                        <span className="yellow-shape">Learn what matters <img src="assets/img/shape/yellow-bg.png" alt="yellow-shape"/> </span> 
                                        Stay relevant!</h3>
                                        <p>Choose from over 30 onsite courses</p>
                                        <Link href="/"><a className="e-btn">EXPLORE COURSES</a></Link>
                                    </div>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                    <div className="hero__thumb d-flex p-relative">
                                    <div className="hero__thumb-shape">
                                        <img className="hero-1-dot" src="assets/img/shape/hero/hero-1-dot.png" alt="img not found"/>
                                        <img className="hero-1-circle-3" src="assets/img/shape/hero/hero-1-circle-3.png" alt="img not found"/>
                                        <img className="hero-1-circle-4" src="assets/img/shape/hero/hero-1-circle-4.png" alt="img not found"/>
                                    </div>
                                    <div className="hero__thumb-big mr-30">
                                        <img src="assets/img/hero/hero-1.jpg" alt="img not found"/>
                                        <div className="hero__quote hero__quote-animation">
                                            <span>Your self-discovery starts here</span>
                                            <h4></h4>
                                        </div>
                                    </div>
                                    <div className="hero__thumb-sm mt-50 d-none d-lg-block">
                                        <img src="assets/img/hero/hero-sm-1.jpg" alt="img not found"/>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default Hero;