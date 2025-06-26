import React, { use } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data=useLoaderData();
    // const [data,setData]=useState({});
//   useEffect(() => {
//      fetch('https://api.github.com/users/PradeepModak')
//      .then(response=>response.json())
//      .then(data=>{
//         console.log(data);
//         setData(data)
//      }) 
//   },[])
  return (
    <div className='text-2xl font-bold text-red-600 bg-gray-200'>
        Github followers:{data.followers}
        <img src={data.avatar_url} alt='github avatar' width='300'></img>
        </div>
  )
}

export default Github
export const githubInfoLoader=async()=>{
   const response=await fetch('https://api.github.com/users/PradeepModak');
   return response.json();
}