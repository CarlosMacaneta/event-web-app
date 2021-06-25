import { Container, Dropdown, Navbar } from "react-bootstrap";

const FixedTopNavbar = () => {
    return(
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm">
            <Navbar bg="light" expand="lg" fixed="top" className="shadow sm">
                <Container>
                    <Navbar.Brand href="/">EventWebApp</Navbar.Brand>
                    <div className="d-flex">
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                                Menu
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="/eventos/create">Registar evento</Dropdown.Item>
                                <Dropdown.Item href="/events">Lista de eventos</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
}

export default FixedTopNavbar;