// import React from 'react'

// function SkillsPreview({resumeInfo}) {
//   return (
//     <div className='my-6'>
//         <h2 className='text-center font-bold text-sm mb-2'
//         style={{
//             color:resumeInfo?.themeColor
//         }}>
//             Skills  </h2>
//         <hr style={{
//             borderColor:resumeInfo?.themeColor
//         }}/>
//         <div className='grid grid-cols-2 gap-3 my-4'>
//             {resumeInfo?.skills?.map((skill,index)=>(
//                 <div hey={index} className='flex items-center justify-between'>
//                     <h2 className='text-xs '>{skill.name}</h2>
//                     <div className='h-2 bg-gray-200 w-[120px]'>
//                         <div className='h-2'
//                         style={{
//                             backgroundColor:resumeInfo?.themeColor,
//                             width:skill?.rating*20+'%'
//                         }}>

//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     </div>
//   )
// }

// export default SkillsPreview

// import React from 'react'

// function SkillsPreview({resumeInfo}) {
//   return (
//     <div className='my-6'>
//     <h2 className='text-center font-bold text-sm mb-2'
//     style={{
//         color:resumeInfo?.themeColor
//     }}
//     >Education</h2>
//     <hr style={{
//         borderColor:resumeInfo?.themeColor
//     }} />

//     <div className='grid grid-cols-2 gap-3 my-4'>
//         {resumeInfo?.skills.map((skill,index)=>(
//             <div key={index} className='flex items-center justify-between'>
//                 <h2 className='text-xs'>{skill.name}</h2>
//                 <div className='h-2 bg-gray-200 w-[120px]'>
//                     <div className='h-2'
//                         style={{
//                             backgroundColor:resumeInfo?.themeColor,
//                             width:skill?.rating*20+'%'
//                         }}
//                     >
//                     </div>
//                 </div>
//             </div>
//         ))}
//     </div>
//     </div>
//   )
// }

// export default SkillsPreview


import React from 'react';

function SkillsPreview({ resumeInfo }) {
  // Default to an empty array if resumeInfo or resumeInfo.skills is undefined
  const skills = resumeInfo?.skills || [];
  const themeColor = resumeInfo?.themeColor || '#000'; // Default color if themeColor is undefined

  return (
    <div className='my-6'>
      <h2
        className='text-center font-bold text-sm mb-2'
        style={{
          color: themeColor
        }}
      >
        Skills
      </h2>
      <hr
        style={{
          borderColor: themeColor
        }}
      />

      <div className='grid grid-cols-2 gap-3 my-4'>
        {skills.length === 0 ? (
          <div>No skills to display</div>
        ) : (
          skills.map((skill, index) => (
            <div key={index} className='flex items-center justify-between'>
              <h2 className='text-xs'>{skill.name}</h2>
              <div className='h-2 bg-gray-200 w-[120px]'>
                <div
                  className='h-2'
                  style={{
                    backgroundColor: themeColor,
                    width: (skill?.rating || 0) * 20 + '%'
                  }}
                >
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default SkillsPreview;
