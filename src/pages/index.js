import React from 'react';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import HomeMain from '../components/Home/HomeMain';
import TestimonialSection2 from '../components/Home/TestimonialSection2';

class Index extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
          <React.Fragment>
            <Header />
            <HomeMain />
            <TestimonialSection2 id="reviews" />
            <Footer />
          </React.Fragment>
        );
    }
}


export default Index;

