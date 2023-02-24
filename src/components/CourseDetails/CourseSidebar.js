import React, { Component } from 'react';
import Link from 'next/link';
// import ReactPlayer from "react-player";
// import Modal from "react-responsive-modal";

class CourseSidebar extends Component {

    state = {
        open: false
      };
    
      onOpenModal = () => {
        this.setState(prevState => ({
          open: !prevState.open
        }));
      };

      onCloseModal = () => {
        this.setState(prevState => ({
          open: !prevState.open
        }));
      };

    render() {

        return (
          <React.Fragment>
            {/* <Modal
                open={this.state.open}
                onClose={this.onCloseModal}
                styles={{
                modal: {
                    maxWidth: "unset",
                    width: "70%",
                    padding: "unset"
                },
                overlay: {
                    background: "rgba(0, 0, 0, 0.5)"
                },
                closeButton: {
                    background: "yellow"
                }
                }}
                center
            >
                <ReactPlayer
                url="https://youu.be/es4x5R-rV9s"
                width="100%"
                height="calc(100vh - 100px)"
                />
            </Modal> */}

            <div className="course__sidebar pl-70 p-relative">
              <div className="course__shape">
                <img className="course-dot" src="/assets/img/course/course-dot.png" alt="course dots" />
              </div>
              <div className="course__sidebar-widget-2 white-bg mb-20">
                
                  <div className="course__enroll-btn">
                    <Link href="/contact">
                      <a className="e-btn e-btn-7 w-100">
                        Enroll <i className="fas fa-arrow-right"></i>
                      </a>
                    </Link>
                  </div>
              </div>
              {/* <div className="course__sidebar-widget-2 white-bg mb-20">
                    <div className="course__sidebar-course">
                        <h3 className="course__sidebar-title">Related courses</h3>
                        <ul>
                            <li>
                                <div className="course__sm d-flex align-items-center mb-30">
                                <div className="course__sm-thumb mr-20">
                                    <Link href="/"><a><img src="assets/img/course/sm/course-sm-1.jpg" alt="img not found"/></a></Link>
                                </div>
                                <div className="course__sm-content">
                                    <div className="course__sm-rating">
                                        <ul>
                                            <li><a href="#"> <i className="fas fa-star"></i> </a></li>
                                            <li><a href="#"> <i className="fas fa-star"></i> </a></li>
                                            <li><a href="#"> <i className="fas fa-star"></i> </a></li>
                                            <li><a href="#"> <i className="fas fa-star"></i> </a></li>
                                            <li><a href="#"> <i className="fas fa-star"></i> </a></li>
                                        </ul>
                                    </div>
                                    <h5><Link href="/"><a>Development</a></Link></h5>
                                    <div className="course__sm-price">
                                        <span>$54.00</span>
                                    </div>
                                </div>
                                </div>
                            </li>
                            <li>
                                <div className="course__sm d-flex align-items-center mb-30">
                                <div className="course__sm-thumb mr-20">
                                    <Link href="/"><a><img src="assets/img/course/sm/course-sm-2.jpg" alt="img not found"/></a></Link>
                                </div>
                                <div className="course__sm-content">
                                    <div className="course__sm-rating">
                                        <ul>
                                            <li><a href="#"> <i className="fas fa-star"></i> </a></li>
                                            <li><a href="#"> <i className="fas fa-star"></i> </a></li>
                                            <li><a href="#"> <i className="fas fa-star"></i> </a></li>
                                            <li><a href="#"> <i className="fas fa-star"></i> </a></li>
                                            <li><a href="#"> <i className="fas fa-star"></i> </a></li>
                                        </ul>
                                    </div>
                                    <h5><Link href="/"><a>Data Science</a></Link></h5>
                                    <div className="course__sm-price">
                                        <span>$72.00</span>
                                    </div>
                                </div>
                                </div>
                            </li>
                            <li>
                                <div className="course__sm d-flex align-items-center mb-10">
                                <div className="course__sm-thumb mr-20">
                                    <Link href="/"><a><img src="assets/img/course/sm/course-sm-3.jpg" alt="img not found"/></a></Link>
                                </div>
                                <div className="course__sm-content">
                                    <div className="course__sm-rating">
                                        <ul>
                                            <li><a href="#"> <i className="fas fa-star"></i> </a></li>
                                            <li><a href="#"> <i className="fas fa-star"></i> </a></li>
                                            <li><a href="#"> <i className="fas fa-star"></i> </a></li>
                                            <li><a href="#"> <i className="fas fa-star"></i> </a></li>
                                            <li><a href="#"> <i className="fas fa-star"></i> </a></li>
                                        </ul>
                                    </div>
                                    <h5><Link href="/"><a>UX Design</a></Link></h5>
                                    <div className="course__sm-price">
                                        <span>Free</span>
                                    </div>
                                </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div> */}
            </div>
          </React.Fragment>
        );
    }
}

export default CourseSidebar;