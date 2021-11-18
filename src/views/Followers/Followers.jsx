import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Follower from '../../components/Followers/Follower';
import "../../views/Followers/Followers.css"
const Followers = () => {

    const {data} =useParams();
    console.log(data);

    const [followers, setFollowers] =useState(null)
    
    const HandleDataApi = async() =>{
        const API = `https://api.github.com/users/${data}/followers`
        const response = await fetch(API)
        const result = await response.json()
        setFollowers(result)
        console.log(result);
    }

    useEffect(() =>{
        HandleDataApi()  
        //eslint-disable-next-line
    },[data])  
    return (
        <div className="items">
            {followers && followers.length >0 ? followers.map((follow,index) =>(
            <Follower
            key={index}
            avatar={follow.avatar_url}
            html_url={follow.html_url}
            github_name={follow.login}
            />
        )): null}</div>
                   
    )
}

export default Followers
