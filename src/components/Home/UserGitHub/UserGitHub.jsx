import React from 'react'
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap'
import "../../../components/Home/UserGitHub/UserGitHub.css";
const UserGitHub = ({avatar,github_name,name, public_repos,followers,following}) => {
    console.log(name);
    return (
        <>
        <Card >
            <Card.Img variant="top" src={avatar} />
            <Card.Body>
                <Card.Title >{name}</Card.Title>
                <Card.Title>{github_name}</Card.Title>
                <Button variant="success"><a href={`https://github.com/${github_name}?tab=repositories`} target="_blank"  rel="noreferrer"> Repositorios {public_repos}</a></Button>
                <Link to={`/followers/${github_name}`}> <Button className="button" variant="primary">Seguidores {followers} </Button></Link>                 
                <Button className="button" variant="primary">Siguiendo {following} </Button>
            </Card.Body>
        </Card>
        </>
    )
}

export default UserGitHub
