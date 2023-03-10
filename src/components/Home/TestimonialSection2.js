import React, { Component } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import testimonials from '../../data/testimonials.json'

function TestimonialSection2 ({id}){

    return (
      <section id={id} className="custom-testimonial__area pt-175 pb-170">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="section__title-wrapper text-center mb-60">
                <h2 className="section__title">
                  What Students
                  <br />
                  <span className="yellow-bg yellow-bg-big">
                    Say ABout Us
                    <img src="assets/img/shape/yellow-bg.png" alt="img not found" />
                  </span>{" "}
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <Swiper
                modules={[Pagination, Scrollbar, A11y]}
                pagination={{ clickable: true }}
                spaceBetween={50}
                slidesPerView={1}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
              >
                {testimonials.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <div className="testimonial-items position-relative">
                      <div className="testimonial-header">
                        <div className="testimonial-img">
                          {/* <img src="assets/img/testimonial/image.png" alt="testifier" /> */}
                        </div>
                        <div className="testimonial-title">
                          <h4>{slide.name}</h4>
                          <span>{slide.role}</span>
                        </div>
                      </div>
                      <div className="testimoni-quotes">
                        <img src="assets/img/testimonial/quotes.png" alt="quotes icon" />
                      </div>
                      <div className="testimonial-body">
                        {/* <h3>Helpful Instructors !</h3> */}
                        <p>{slide.body}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    );
  
}

export default TestimonialSection2;
