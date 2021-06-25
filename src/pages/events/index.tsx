import EventDataTable from "components/DataTable/EventDataTable";
import LineChart from "components/LineChart";
import FixedTopNavbarEventPage from "components/Navbar/NavBarEventsPage";
import { Col, Container, Row } from "react-bootstrap";
import { Event } from "types/event";

type Props = {
    fillTable: Array<Event>;
}

const Events = ({fillTable}: Props) => {

    //const [events, setEvents] = useState<Event[]>([]);

    return(
        <>          
            <header className="mb-5">
                <FixedTopNavbarEventPage />
            </header>
            <main>
                <Container className="my-5">
                    <Row>
                        <Col md={12}>
                            <h3 className="display-6">Estatísticas</h3>
                            <LineChart dataEvent = {fillTable} />
                        </Col>
                    </Row>
                    <Row className="my-1">
                        <Col md={12}>
                            <h3 className="display-6">Lista de eventos</h3>
                            <EventDataTable events = {fillTable} />
                        </Col>                   
                    </Row>
                </Container>
            </main>           
        </>
    );
}

export default Events;