 

import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import React, { useContext, useEffect } from 'react';
import PersonalDetailsPreview from './preview/PersonalDetailsPreview';
import SummeryPreview from './preview/SummeryPreview';
import ExperiencePreview from './preview/ExperiencePreview';
import EducationalPreview from './preview/EducationalPreview';
import SkillsPreview from './preview/SkillsPreview';

function ResumePreview() {
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

    // Debugging log to check resumeInfo
    useEffect(() => {
        console.log('ResumeInfo in ResumePreview:', resumeInfo);
    }, [resumeInfo]);

    if (!resumeInfo) {
        return <div>Loading resume data...</div>;
    }

    return (
        <div
            className='shadow-lg h-full p-14 border-t-[20px]'
            style={{
                borderColor: resumeInfo?.themeColor || '#000', // Fallback color if themeColor is undefined
            }}
        >
            {/* Personal Details */}
            <PersonalDetailsPreview resumeInfo={resumeInfo} />

            {/* Summary */}
            <SummeryPreview resumeInfo={resumeInfo} />

            {/* Professional Experience */}
            <ExperiencePreview resumeInfo={resumeInfo} />

            {/* Education */}
            <EducationalPreview resumeInfo={resumeInfo} />

            {/* Skills */}
            <SkillsPreview resumeInfo={resumeInfo} />
        </div>
    );
}

export default ResumePreview;
