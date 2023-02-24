import React from 'react';
import Footer from '../components/Layout/Footer/Footer';
import CourseGridMain from '../components/CourseGrid/CourseGridMain';
import HeaderThree from "../components/Layout/Header/HeaderCourses";

class CourseGrid extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <HeaderThree />
            <CourseGridMain id="coursetabs" />;
            <Footer />
            </React.Fragment>
        );
    }
}


export default CourseGrid;

