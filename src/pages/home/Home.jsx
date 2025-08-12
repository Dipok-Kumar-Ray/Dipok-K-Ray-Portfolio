import React from 'react';
import HomeSlider from '../../shared/HomeSlider';
import ToolsSection from './tools/ToolsSection';
import ToolsSliderSection from './tools/ToolsSliderSection';
import About from '../about/About';

const Home = () => {
    return (
        <div>
           <HomeSlider/>
           <About/>
           <ToolsSection/>
           <ToolsSliderSection/>
        </div>
    );
};

export default Home;