import React, { Component } from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import GetInTouch from './GetInTouchSection';
import Knowledge from './KnowledgeSection';


class ContactMain extends Component {

    render() {

        return (
            <main>
	            {/* breadcrumb-start */}
				<Breadcrumb bgImage="college-students-studying.jpeg" pageTitle="Contact" />
				{/* breadcrumb-end */}

                {/* Getintouch-start */}
				<GetInTouch />
				{/* Getintouch-end */}
        	</main>
        );
    }
}

export default ContactMain;