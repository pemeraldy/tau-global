import React, { Component } from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import CourseGridTab from '../Elements/Tab/CourseGridTab';


// import bg from "./public/assets/img/banner/college-students-studying.jpg";
// import bg from "../../../public/assets/img/banner/college-students-studying.jpg";

class CourseGridMain extends Component {

    render() {

        return (
          <main>
            {/* breadcrumb-start */}
            <Breadcrumb bgImage="/college-students-studying.jpg" />
            <Breadcrumb bgImage="college-students-studying.jpeg" pageTitle="Contact" />
            {/* breadcrumb-end */}

            {/* course tab-start */}
            <CourseGridTab />
            {/* course tab-end */}

            {/* cta-start */}
            {/* <Cta /> */}
            {/* cta-end */}
          </main>
        );
    }
}

export default CourseGridMain;