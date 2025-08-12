import React from 'react';
import HomeSlider from '../../shared/HomeSlider';
import ToolsSection from './tools/ToolsSection';
import ToolsSliderSection from './tools/ToolsSliderSection';
import About from '../about/About';
import Education from './education/Education';
import ContactInfo from '../contact/ContactInfo';
import ProjectsSection from '../projects/ProjectsSection';

const Home = () => {
    return (
        <div>
           <HomeSlider/>
           <About/>
           <ToolsSection/>
           <ToolsSliderSection/>
           <Education/>
           <ProjectsSection/>
           <ContactInfo/>
        </div>
    );
};

export default Home;