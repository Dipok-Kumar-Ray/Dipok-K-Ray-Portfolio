import { useEffect } from "react";
import ToolsSection from '../home/tools/ToolsSection';
import ToolsSliderSection from '../home/tools/ToolsSliderSection';
import SkillAssessment from './SkillAssessment';

const Skills = () => {
    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <div className='bg-[#0F172A]'>
            <ToolsSection />
            <ToolsSliderSection />
            <SkillAssessment />
        </div>
    );
};

export default Skills;