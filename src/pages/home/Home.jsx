import React, { useEffect } from 'react';
import HomeSlider from '../../shared/HomeSlider';
import ToolsSection from './tools/ToolsSection';
import ToolsSliderSection from './tools/ToolsSliderSection';
import About from '../about/About';
import Education from './education/Education';
import ContactInfo from '../contact/ContactInfo';
import ProjectsSection from '../projects/ProjectsSection';

const Home = () => {
    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <div className="bg-[#0F172A]">
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