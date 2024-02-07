import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar(props) {
    return (<>
        {/*<Navbar bg="dark" data-bs-theme="dark">*/}
        {/*    <Container>*/}
        {/*        <Navbar.Brand href="#home">Navbar</Navbar.Brand>*/}
        {/*        <Nav className="me-auto">*/}
        {/*            <Nav.Link href="#home">Home</Nav.Link>*/}
        {/*            <Nav.Link href="#features">Features</Nav.Link>*/}
        {/*            <Nav.Link href="#pricing">Pricing</Nav.Link>*/}
        {/*        </Nav>*/}
        {/*    </Container>*/}
        {/*</Navbar>*/}

        {/*<br/>*/}
        {/*<Navbar bg="primary" data-bs-theme="dark">*/}
        {/*    <Container>*/}
        {/*        <Navbar.Brand href="#home">Navbar</Navbar.Brand>*/}
        {/*        <Nav className="me-auto">*/}
        {/*            <Nav.Link href="#home">Home</Nav.Link>*/}
        {/*            <Nav.Link href="#features">Features</Nav.Link>*/}
        {/*            <Nav.Link href="#pricing">Pricing</Nav.Link>*/}
        {/*        </Nav>*/}
        {/*    </Container>*/}
        {/*</Navbar>*/}

        <br/>
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="/">Store <strong>Books</strong></Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/add">Add_<strong>Books</strong></Nav.Link>
                    <Nav.Link href="#pricing"><strong>Delete</strong></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </>);
}

export default NavBar;