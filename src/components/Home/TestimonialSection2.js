import React, { Component } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

class TestimonialSection2 extends Component {
  render() {
    return (
      <section className="testimonial__area pt-175 pb-170">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="section__title-wrapper mb-60">
                <h2 className="section__title">
                  What Students Think
                  <br />
                  <span className="yellow-bg yellow-bg-big">
                    & Say ABout Us
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
                {[1, 2, 3, 4, 5, 5, 6, 7, 8].map((slide, index) => (
                  <SwiperSlide key={index}>
                    <div className="testimonial-items position-relative">
                      <div className="testimonial-header">
                        <div className="testimonial-img">
                          <img src="assets/img/testimonial/testimonial.png" alt="image not found" />
                        </div>
                        <div className="testimonial-title">
                          <h4>Richard Joseph</h4>
                          <span>Student</span>
                        </div>
                      </div>
                      <div className="testimoni-quotes">
                        <img src="assets/img/testimonial/quotes.png" alt="image not found" />
                      </div>
                      <div className="testimonial-body">
                        <h3>Helpful Instructors !</h3>
                        <p>There are so many websites out there that have not considered the overall usability of their visually impaired users. When it comes to designing better links.</p>
                      </div>
                      <div className="testimonial-icon">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
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
}

export default TestimonialSection2;
