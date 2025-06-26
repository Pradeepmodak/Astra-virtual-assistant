import React from 'react'
import {useParams} from 'react-router-dom'

function User() {
    const {userId} = useParams()
  return (
    <div className='text-2xl font-bold text-red-600 bg-gray-200'>User: {userId}</div>
  )
}

export default User