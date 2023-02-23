import React from 'react';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import HomeMain from '../components/Home/HomeMain';
import TestimonialSection2 from '../components/Home/TestimonialSection2';
import Skilline from "../components/HomeTwo/SkillineSection";
// import BrandSection from '../components/Elements/Brand/BrandSection';

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
            <div id="cowork" style={{marginTop: '-120px', paddingBottom:'70px'}} className='mt-n10'>
              <Skilline />
            </div>
            <Footer />
          </React.Fragment>
        );
    }
}


export default Index;

