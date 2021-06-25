import Events from "pages/events";
import CreateEvent from "pages/events/create";
import Guests from "pages/guests";
import Home from "pages/Home";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Event } from "types/event";

const Routes = () => {

    const [eventTable, setEventTable] = useState<Array<Event>>([]);

    const updateEventTable = (event: Event[]): void => {
        setEventTable(event);
    }

    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/eventos/create">
                    <CreateEvent setEventTable = {updateEventTable}  />
                </Route>
                <Route path="/events">
                    <Events fillTable = {eventTable} />
                </Route>
                <Route path="/guests">
                    <Guests />
                </Route>
            </Switch>
        </Router>
    );
}

export default Routes;