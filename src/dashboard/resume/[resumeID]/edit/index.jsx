 

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FormSection from '../../components/FormSection';
import ResumePreview from '../../components/ResumePreview';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import dummy from '@/data/dummy';
import GlobalApi from './../../../../../service/GlobalApi';

function EditResume() {
    const { resumeId } = useParams();
    const [resumeInfo, setResumeInfo] = useState(dummy);
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        GetResumeInfo();
    }, [resumeId]); // Add resumeId as a dependency

    const GetResumeInfo = async () => {
        setLoading(true); // Set loading to true before the request
        try {
            const resp = await GlobalApi.GetResumeById(resumeId);
            console.log(resp.data.data);
            setResumeInfo(resp.data.data);
        } catch (error) {
            console.error('Failed to fetch resume:', error);
        } finally {
            setLoading(false); // Set loading to false after the request completes
        }
    };

    if (loading) {
        return <div>Loading...</div>; // Display a loading message or spinner while fetching data
    }

    return (
        <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
            <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-10">
                {/* Form Section */}
                <FormSection />
                {/* Preview Section */}
                <ResumePreview />
            </div>
        </ResumeInfoContext.Provider>
    );
}

export default EditResume;
