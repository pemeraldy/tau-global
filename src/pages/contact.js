import React from 'react';
import ContactMain from '../components/Contact/ContactMain';
import HeaderThree from "../components/Layout/Header/Header";
import FooterThree from '../components/Layout/Footer/Footer';

class Contact extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <HeaderThree />
            <ContactMain />
            <FooterThree />
            </React.Fragment>
        );
    }
}


export default Contact;

