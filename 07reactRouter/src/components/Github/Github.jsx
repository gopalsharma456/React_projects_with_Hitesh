import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() =>{
    //     fetch(`https://api.github.com/users/gopalsharma456`)
    //     .then(res => res.json())
    //     .then(data => {
    //         setData(data)
    //     })

    // }, [])
  return (
    <div className='text-center text-white m-4 bg-gray-600 p-4 text-3xl'>Github Followers: {data.followers}
    <img src={data.avatar_url} alt='github picture' width={250}/>
    </div>

  )
}

export default Github

// useloader used here for fetching data as user hovers over link hence better optimization!!!!
export const githubInfoLoader = async () => {
    const res = await fetch(`https://api.github.com/users/gopalsharma456`)
    return res.json()
        
}