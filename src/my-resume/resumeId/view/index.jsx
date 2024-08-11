// import Header from '@/components/custom/Header'
// import { Button } from '@/components/ui/button'
// import { ResumeInfoContext } from '@/context/ResumeInfoContext'
// import ResumePreview from '@/dashboard/resume/components/ResumePreview'
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import GlobalApi from './../../../../service/GlobalApi'
// import { RWebShare } from 'react-web-share'

// function ViewResume() {

//     const [resumeInfo,setResumeInfo]=useState();
//     const {resumeId}=useParams();

//     useEffect(()=>{
//         GetResumeInfo();
//     },[])
//     const GetResumeInfo=()=>{
//         GlobalApi.GetResumeById(resumeId).then(resp=>{
//             console.log(resp.data.data);
//             setResumeInfo(resp.data.data);
//         })
//     }

//     const HandleDownload=()=>{
//         window.print();
//     }

//   return (
//     <ResumeInfoContext.Provider value={{resumeInfo,setResumeInfo}} >
//         <div id="no-print">
//         <Header/>

//         <div className='my-10 mx-10 md:mx-20 lg:mx-36'>
//             <h2 className='text-center text-2xl font-medium'>
//                 Congrats! Your Ultimate AI generates Resume is ready ! </h2>
//                 <p className='text-center text-gray-400'>Now you are ready to download your resume and you can share unique 
//                     resume url with your friends and family </p>
//             <div className='flex justify-between px-44 my-10'>
//                 <Button onClick={HandleDownload}>Download</Button>
               
//                 <RWebShare
//         data={{
//           text: "Hello Everyone, This is my resume please open url to see it",
//           url: import.meta.env.VITE_BASE_URL+"/my-resume/"+resumeId+"/view",
//           title: resumeInfo?.firstName+" "+resumeInfo?.lastName+" resume",
//         }}
//         onClick={() => console.log("shared successfully!")}
//       > <Button>Share</Button>
//       </RWebShare>
//             </div>
//         </div>
            
//         </div>
//         <div className='my-10 mx-10 md:mx-20 lg:mx-36'>
//         <div id="print-area" >
//                 <ResumePreview/>
//             </div>
//             </div>
//     </ResumeInfoContext.Provider>
//   )
// }

// export default ViewResume

// import Header from '@/components/custom/Header';
// import { Button } from '@/components/ui/button';
// import { ResumeInfoContext } from '@/context/ResumeInfoContext';
// import ResumePreview from '@/dashboard/resume/components/ResumePreview';
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import GlobalApi from './../../../../service/GlobalApi';
// import { RWebShare } from 'react-web-share';

// function ViewResume() {
//     const [resumeInfo, setResumeInfo] = useState( );
//     const [loading, setLoading] = useState(true); // Track loading state
//     const { resumeId } = useParams();

//     useEffect(() => {
//         GetResumeInfo();
//     }, [resumeId]); // Dependency to refetch if resumeId changes

//     const GetResumeInfo = async () => {
//         setLoading(true); // Start loading
//         try {
//             const resp = await GlobalApi.GetResumeById(resumeId);
//             console.log(resp.data.data);
//             setResumeInfo(resp.data.data);
//         } catch (error) {
//             console.error('Failed to fetch resume:', error);
//         } finally {
//             setLoading(false); // End loading
//         }
//     };

//     const HandleDownload = () => {
//         if (!loading) {
//             window.print();
//         }
//     };

//     return (
//         <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
//             <div id="no-print">
//                 <Header />

//                 <div className='my-10 mx-10 md:mx-20 lg:mx-36'>
//                     <h2 className='text-center text-2xl font-medium'>
//                         Congrats! Your Ultimate AI-generated Resume is ready!
//                     </h2>
//                     <p className='text-center text-gray-400'>
//                         Now you are ready to download your resume and you can share the unique resume URL with your friends and family.
//                     </p>
//                     <div className='flex justify-between px-44 my-10'>
//                         <Button onClick={HandleDownload} disabled={loading}>
//                             {loading ? 'Loading...' : 'Download'}
//                         </Button>

//                         <RWebShare
//                             data={{
//                                 text: "Hello Everyone, This is my resume please open the URL to see it",
//                                 url: `${import.meta.env.VITE_BASE}/my-resume/${resumeId}/view`,
//                                 title: `${resumeInfo?.firstName} ${resumeInfo?.lastName} resume`,
//                             }}
//                             onClick={() => console.log("Shared successfully!")}
//                         >
//                             <Button>Share</Button>
//                         </RWebShare>
//                     </div>
//                 </div>
//             </div>

//             <div className='my-10 mx-10 md:mx-20 lg:mx-36'>
//                 <div id="print-area">
//                     {!loading && resumeInfo ? (
//                         <ResumePreview />
//                     ) : (
//                         <p>Loading resume...</p>
//                     )}
//                 </div>
//             </div>
//         </ResumeInfoContext.Provider>
//     );
// }

// export default ViewResume;


import Header from '@/components/custom/Header';
import { Button } from '@/components/ui/button';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import ResumePreview from '@/dashboard/resume/components/ResumePreview';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GlobalApi from './../../../../service/GlobalApi';
import { RWebShare } from 'react-web-share';
import dummy from '@/data/dummy'; // Ensure this path is correct


function ViewResume() {
    const [resumeInfo, setResumeInfo] = useState(dummy);
    const [loading, setLoading] = useState(true);
    const { resumeId } = useParams();

    useEffect(() => {
        GetResumeInfo();
    }, [resumeId]);

    

    const GetResumeInfo = async () => {
        setLoading(true);
        try {
            const resp = await GlobalApi.GetResumeById(resumeId);
            console.log(resp.data.data);
            setResumeInfo(resp.data.data || dummy);
        } catch (error) {
            console.error('Failed to fetch resume:', error);
        } finally {
            setLoading(false);
        }
    };

    const HandleDownload = () => {
        // Use a small delay to ensure the render completes before printing
        setTimeout(() => {
            window.print();
        }, 500);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
            <div id="no-print">
                <Header />

                <div className="my-10 mx-10 md:mx-20 lg:mx-36">
                    <h2 className="text-center text-2xl font-medium">
                        Congrats! Your Ultimate AI-generated Resume is ready!
                    </h2>
                    <p className="text-center text-gray-400">
                        Now you are ready to download your resume and you can share the unique resume URL with your friends and family.
                    </p>
                    <div className="flex justify-between px-44 my-10">
                        <Button onClick={HandleDownload} disabled={loading}>
                            Download
                        </Button>

                        <RWebShare
                            data={{
                                text: "Hello Everyone, This is my resume, please open the URL to see it.",
                                url: `${import.meta.env.VITE_BASE_URL}/my-resume/${resumeId}/view`,
                                title: `${resumeInfo?.firstName} ${resumeInfo?.lastName} resume`,
                            }}
                            onClick={() => console.log("Shared successfully!")}
                        >
                            <Button>Share</Button>
                        </RWebShare>
                    </div>
                </div>
            </div>

            <div className="my-10 mx-10 md:mx-20 lg:mx-36">
                <div id="print-area">
                    <ResumePreview />
                </div>
            </div>
        </ResumeInfoContext.Provider>
    );
}

export default ViewResume;
