import EventForm from "components/Forms/EventForm";
import FixedTopNavbarCreateEvent from "components/Navbar/NavBarEventsPage/list-event-navbar";
import { Event } from "types/event";

type Props = {
    setEventTable: (args: Event[]) => void;
}

const CreateEvent = ({setEventTable}: Props) => {

    return (
        <>
            <header>
                <FixedTopNavbarCreateEvent />
            </header>
            <main>
                <div className="container my-5 event-form">
                    <h4>Formulário de registo</h4>
                    <hr />
                    <EventForm setEventTable  = {setEventTable} />
                </div>
            </main>            
        </>
    );
}

export default CreateEvent;