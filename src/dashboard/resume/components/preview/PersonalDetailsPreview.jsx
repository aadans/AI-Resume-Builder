// import React from 'react'

// function PersonalDetailsPreview({resumeInfo}) {
//   return (
//     <div>
//         <h2 className='font-bold text-xl text-center'
//         style={{
//             color:resumeInfo?.themeColor
//         }}
//         >
//             {resumeInfo?.firstName} {resumeInfo?.lastName}</h2>
//         <h2 className='text-center text-sm font-medium'>{resumeInfo?.jobTitle}</h2>
//         <h2 className='text-center font-normal text-xs'
//         style={{
//             color:resumeInfo?.themeColor
//         }}>{resumeInfo?.address}</h2>

//         <div className='flex justify-between'>
//             <h2 className='font-normal text-xs'
//             style={{
//                 color:resumeInfo?.themeColor
//             }}>{resumeInfo?.phone}</h2> 
//             <h2 className='font-normal text-xs'
//             style={{
//                 color:resumeInfo?.themeColor
//             }}>{resumeInfo?.email}</h2> 
//         </div>
//         <hr className='border-[1.8px] m-2'
//         style={{
//             borderColor:resumeInfo?.themeColor
//         }}/>
//     </div>
//   )
// }

// export default PersonalDetailsPreview

// import React from 'react';

// function PersonalDetailsPreview({ resumeInfo }) {
//   // Debugging log to verify that resumeInfo is being passed correctly
//   console.log('PersonalDetailsPreview resumeInfo:', resumeInfo);

//   // Safeguard: Return null or a fallback UI if resumeInfo is undefined or missing critical data
//   if (!resumeInfo) {
//     return <div>No personal details available.</div>;
//   }

//   return (
//     <div>
//       <h2
//         className='font-bold text-xl text-center'
//         style={{
//           color: resumeInfo?.themeColor || '#000', // Fallback color
//         }}
//       >
//         {resumeInfo?.firstName} {resumeInfo?.lastName}
//       </h2>
//       <h2 className='text-center text-sm font-medium'>{resumeInfo?.jobTitle}</h2>
//       <h2
//         className='text-center font-normal text-xs'
//         style={{
//           color: resumeInfo?.themeColor || '#000', // Fallback color
//         }}
//       >
//         {resumeInfo?.address}
//       </h2>

//       <div className='flex justify-between'>
//         <h2
//           className='font-normal text-xs'
//           style={{
//             color: resumeInfo?.themeColor || '#000', // Fallback color
//           }}
//         >
//           {resumeInfo?.phone}
//         </h2>
//         <h2
//           className='font-normal text-xs'
//           style={{
//             color: resumeInfo?.themeColor || '#000', // Fallback color
//           }}
//         >
//           {resumeInfo?.email}
//         </h2>
//       </div>
//       <hr
//         className='border-[1.8px] m-2'
//         style={{
//           borderColor: resumeInfo?.themeColor || '#000', // Fallback color
//         }}
//       />
//     </div>
//   );
// }

// export default PersonalDetailsPreview;

import React, { useEffect, useState } from 'react';
import PersonalDetailsPreview from './PersonalDetailsPreview';
import dummy from '@/data/dummy'; // Ensure this path is correct

function ResumeContainer() {
  const [resumeInfo, setResumeInfo] = useState(null);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setResumeInfo(dummy); // Replace with actual API call
    }, 1000); // Simulated delay
  }, []);

  if (!resumeInfo) {
    return <div>Loading...</div>; // Show loading state while data is being fetched
  }

  return (
    <div>
      <PersonalDetailsPreview resumeInfo={resumeInfo} />
      {/* Other components */}
    </div>
  );
}

export default ResumeContainer;
