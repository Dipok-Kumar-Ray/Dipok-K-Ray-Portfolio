import React from 'react';
import HomeSlider from '../../shared/HomeSlider';
import ToolsSection from './tools/ToolsSection';
import ToolsSliderSection from './tools/ToolsSliderSection';
import About from '../about/About';
import Education from './education/Education';
import ContactInfo from '../contact/ContactInfo';

const Home = () => {
    return (
        <div>
           <HomeSlider/>
           <About/>
           <ToolsSection/>
           <ToolsSliderSection/>
           <Education/>
           <ContactInfo/>
        </div>
    );
};

export default Home;