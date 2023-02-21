import React, { Component } from 'react';
import Hero from './HeroSection';
import Category from './CategorySection';
import About from '../HomeTwo/AboutSection';
import Banner from './BannerSection';
import Event from './EventSection';
import Cta from './CtaSection';
import PriceTab from '../Elements/Tab/PriceTab';
import CourseTab from '../Elements/Tab/CourseTab';
import dynamic from 'next/dynamic';
const BrandWithNoSSR = dynamic(() => import('../Elements/Brand/BrandSection'), {
  ssr: false
})

class HomeMain extends Component {

    render() {

        return (
            <main>
	            {/* hero-start */}
				<Hero />
				{/* hero-end */}
					<br/>
					<br/>
					<br/>
				{/* <BrandWithNoSSR /> */}

				{/* category-start */}
				<Category />
				{/* category-end */}

				{/* About-start */}
				<About />
				{/* About-end */}

				{/* course-start */}
				<CourseTab />
				{/* course-end */}

				{/* event-start */}
				{/* <Event /> */}
				{/* event-end */}

				{/* tab-start */}
				{/* <PriceTab /> */}
				{/* tab-end */}
				
				{/* cta-start */}
				{/* <Cta /> */}
				{/* cta-end */}

        	</main>
        );
    }
}

export default HomeMain;