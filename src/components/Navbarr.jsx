
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom'
const Navbarr = () => {

    const cartproducts = useSelector(state => state.cart)
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">Redux ToolKit</Navbar.Brand>

                    <Nav>
                        <Nav.Link to="/" as={Link}>Products</Nav.Link>
                    </Nav>

                    <Nav
                        className="me-auto my-2 my-lg-0 "
                        style={{ maxHeight: '100px' }}
                        navbarScroll>

                        <Nav.Link to="/cart" as={Link} className="justify-content-end">My Bag {cartproducts.length}</Nav.Link>
                    </Nav>






                </Container>
            </Navbar>
        </div>
    )
}

export default Navbarr