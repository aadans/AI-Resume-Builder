// import React, { useEffect, useState } from 'react'
// import AddResume from './components/AddResume'
// import { useUser } from '@clerk/clerk-react'
// import GlobalApi from './../../service/GlobalApi';
// import ResumeCardItem from './components/ResumeCardItem';

// function Dashboard() {

//   const {user} = useUser();
//   const [resumeList,setResumeList]=useState([]);

//   useEffect(()=>{
//     user&&GetResumeList()
//   },[user])

//   // used to get user resume list

//   const GetResumeList=()=>{
//     GlobalApi.GetUserResumes(user?.primaryEmailAddress?.emailAddress)
//     .then(resp=>{ 
//       // console.log(resp.data)
//       setResumeList(resp.data.data);
//     })
    
//   }
//   return (
//     <div className='p-10 md:px-20 lg:px-32'>
//       <h1 className='font-bold text-3xl'>My Resume</h1>
//       <p>Start Creating AI Resume to your next Job role </p>
//       <div className='mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5'>
//         <AddResume/>
//         {resumeList.length>0 && resumeList.map((resume,index)=>(
//           <ResumeCardItem resume={resume} key={index} />
//         ))}
         
//       </div>
//     </div>
//   )
// }

// export default Dashboard


// import React, { useEffect, useState } from 'react'
// import AddResume from './components/AddResume'
// import { useUser } from '@clerk/clerk-react'
// import GlobalApi from './../../service/GlobalApi';
// import ResumeCardItem from './components/ResumeCardItem';

// function Dashboard() {

//   const {user}=useUser();
//   const [resumeList,setResumeList]=useState([]);
//   useEffect(()=>{
//     user&&GetResumesList()
//   },[user])

//   /**
//    * Used to Get Users Resume List
//    */
//   const GetResumesList=()=>{
//     GlobalApi.GetUserResumes(user?.primaryEmailAddress?.emailAddress)
//     .then(resp=>{
//       console.log(resp.data.data)
//       setResumeList(resp.data.data || []);
//     })
//   }
//   return (
//     <div className='p-10 md:px-20 lg:px-32'>
//       <h2 className='font-bold text-3xl'>My Resume</h2>
//       <p>Start Creating AI resume to your next Job role</p>
//       <div className='grid grid-cols-2 
//       md:grid-cols-3 lg:grid-cols-5 gap-5
//       mt-10
//       '>
//         <AddResume/>
//         {resumeList.length>0?resumeList.map((resume,index)=>(
//           <ResumeCardItem resume={resume} key={index} refreshData={GetResumesList} />
//         )):
//         [1,2,3,4].map((item,index)=>(
//           <div className='h-[280px] rounded-lg bg-slate-200 animate-pulse'>
//           </div>
//         ))
//         }
//       </div>
//     </div>
//   )
// }

// export default Dashboard


import React, { useEffect, useState } from 'react';
import AddResume from './components/AddResume';
import { useUser } from '@clerk/clerk-react';
import GlobalApi from './../../service/GlobalApi';
import ResumeCardItem from './components/ResumeCardItem';
import dummy from '@/data/dummy';

function Dashboard() {
  const { user } = useUser();
  const [resumeList, setResumeList] = useState([dummy]);

  useEffect(() => {
    if (user) {
      GetResumesList();
    }
  }, [user]);

  /**
   * Used to Get Users Resume List
   */
  const GetResumesList = () => {
    GlobalApi.GetUserResumes(user?.primaryEmailAddress?.emailAddress)
      .then((resp) => {
        console.log(resp.data.data);
        setResumeList(resp.data.data || dummy); // Ensure the list is always an array
      })
      .catch((error) => {
        console.error("Error fetching resumes:", error);
        setResumeList([]); // Fallback to empty array in case of error
      });
  };

  return (
    <div className='p-10 md:px-20 lg:px-32'>
      <h2 className='font-bold text-3xl'>My Resume</h2>
      <p>Start Creating AI resume to your next Job role</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-10'>
        <AddResume />
        {resumeList.length > 0 ? (
          resumeList.map((resume, index) => (
            <ResumeCardItem 
              resume={resume} 
              key={resume.id || index} // Use a unique key, preferably an id
              refreshData={GetResumesList} 
            />
          ))
        ) : (
          [1, 2, 3, 4].map((item, index) => (
            <div 
              key={index}  // Add a unique key for each placeholder
              className='h-[280px] rounded-lg bg-slate-200 animate-pulse'>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Dashboard;
