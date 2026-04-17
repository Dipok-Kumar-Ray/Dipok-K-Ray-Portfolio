import { useEffect } from "react";
import ToolsSection from '../home/tools/ToolsSection';
import ToolsSliderSection from '../home/tools/ToolsSliderSection';

const Skills = () => {
    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <div className='bg-[#0F172A]'>
            <ToolsSection/>
            <ToolsSliderSection/>
        </div>
    );
};

export default Skills;