import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <Navbar expand="lg" bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <Link class="nav-link" to={"/add_student"}>Add Student</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to={"/"}>View Student</Link>
                            </li>
                        </ul>

                       
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default Header
