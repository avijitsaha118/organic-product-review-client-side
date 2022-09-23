import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../firebase.init';
import { signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    const navigate = useNavigate();

    const navigateAddNew = event => {
        navigate('/information');
    }
    const navigateLogin = event => {
        navigate('/login');
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        {/* <img height={30} src={logo} alt="logo-img"></img> */}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>

                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>


                        </Nav>
                        <Nav>

                            {
                                user && <>
                                    <button onClick={navigateAddNew} type="button" class="btn btn-primary btn-rounded">Add Product</button>
                                    <Nav.Link as={Link} to="/manage">Manage</Nav.Link>
                                    <Nav.Link as={Link} to="/addreview">Add Review</Nav.Link>
                                    <Nav.Link as={Link} to="/removereview">Remove Review</Nav.Link>
                                </>
                            }

                            {
                                user ?
                                    <button onClick={handleSignOut} type="button" class="btn btn-light btn-rounded">Log Out</button>

                                    :
                                    <button onClick={navigateLogin} type="button" class="btn btn-light btn-rounded">Login</button>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;