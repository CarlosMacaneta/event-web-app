import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const FixedTopNavbarCreateEvent = () => {
    return(
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow sm">
            <Navbar bg="light" expand="lg" fixed="top" className="shadow sm">
                <Container>
                    <Navbar.Brand href="/">EventWebApp</Navbar.Brand>
                    <div className="d-flex">
                        <Link className="btn btn-outline-primary" to= '/events' role="button">Listar eventos</Link>
                    </div>
                </Container>
            </Navbar>
        </div>   
    );
}

export default FixedTopNavbarCreateEvent;