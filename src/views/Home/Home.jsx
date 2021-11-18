import React, { useState } from 'react'
import FormUserGit from '../../components/Home/FormUserGit/FormUserGit'
import UserGitHub from '../../components/Home/UserGitHub/UserGitHub'
import { Spinner } from 'react-bootstrap'
import "../../views/Home/Home.css"
const Home = () => {

    const [user, setUser]= useState("")
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const HandleUserdata = ({value}) =>{
       setUser(value)
    }
    const HandleSearchUser = async e =>{
        e.preventDefault()
        setLoading(true)
        const API =  `https://api.github.com/users/${user}`;
        const response = await fetch(API)
        const result = await response.json()
        setData(result)
        setLoading(false)
    }
    return (
        <>
        <FormUserGit
        HandleUserdata={HandleUserdata}
        HandleSearchUser={HandleSearchUser}
        /> 
        
        {data ? ( 
            <UserGitHub
            avatar={data?.avatar_url}
            github={data?.html_url}
            github_name={data?.login}
            name={data?.name  ?  data?.name : "No tiene nombre"}
            public_repos={data?.public_repos}
            followers={data?.followers}
            following={data?.following}
        />
        ): null
       }
    
        
       {loading && <Spinner className="loading" animation="border" variant="primary"></Spinner>}
    </>
    )
}

export default Home
