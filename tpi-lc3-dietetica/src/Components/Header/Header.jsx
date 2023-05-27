import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css';
import logo from '../../assets/logos/logo.png';
import { FaShoppingCart } from 'react-icons/fa';

function Header() {
  return (
    <header>
        <Navbar bg="" expand="lg">
        <Container fluid>
            <Navbar.Brand href="#">
                <img src={logo} alt='Logo de la empresa' className='logo'/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link href="#action1">Tienda</Nav.Link>
                <Nav.Link href="#action2">Mi cuenta</Nav.Link>
                <NavDropdown title="Nosotros" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Quiénes somos</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                    Preguntas frecuentes
                </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/cart">
                    <FaShoppingCart /> Carrito
                </Nav.Link>
            </Nav>
            <Form className="d-flex">
                <Form.Control
                type="search"
                placeholder="Buscar"
                className="me-2"
                aria-label="Search"
                />
                <Button variant="outline-success">Buscar</Button>
            </Form>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </header>
  );
}

export default Header;