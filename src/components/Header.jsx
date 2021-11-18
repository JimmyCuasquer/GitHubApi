import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import "../components/Header.css"
const Header = () => {

    return (
    <Navbar  bg="dark" variant="dark ">
        <Container>
            <Navbar.Brand href="#home">
            My GitHub API
            </Navbar.Brand>
        </Container>
    </Navbar>
    )
}

export default Header
