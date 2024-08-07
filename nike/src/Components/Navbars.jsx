import { Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../Components/Navbars.css';
import icon from '../Images/nike-ofl.png';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { IoMdLogOut } from 'react-icons/io';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useContext, useEffect, useState } from 'react';
import { cartDetailsContext } from '../App';

export const Navbars = () => {
    const [uName, setUName] = useState('');
    const navigate = useNavigate();
    const { handleLogout: contextHandleLogout } = useContext(cartDetailsContext);

    useEffect(() => {
        const storedName = localStorage.getItem('userName');
        if (storedName) {
            setUName(storedName);
        }
    }, []);

    const localHandleLogout = () => {
        // Clear local storage
        localStorage.removeItem('userName');
        localStorage.removeItem('userId');
        
        // Clear state
        setUName('');

        // Call context logout function
        contextHandleLogout();

        // Navigate to login page
        navigate('/ulogin');
    };

    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home" className="brand">
                    <img
                        src={icon}
                        width="60"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Brand logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/" className='nav-link'>HOME</Link>
                        <Link to="/men" className='nav-link'>MEN</Link>
                        <Link to="/women" className='nav-link'>WOMEN</Link>
                        <Link to="/sports" className='nav-link'>SPORTS</Link>
                    </Nav>
                    <Nav className='icons'>
                        <Link to="/addcart" className='nav-link'>
                            <FaShoppingCart />
                        </Link>
                        {!uName ? (
                            <Link to="/ulogin" className='nav-link'>
                                <FaUser />
                            </Link>
                        ) : (
                            <div className="user-info">
                                <span>{uName}</span>
                                <button onClick={localHandleLogout} className="logout-btn"><IoMdLogOut /></button>
                            </div>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
