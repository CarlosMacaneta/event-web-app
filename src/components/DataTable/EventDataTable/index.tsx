import axios from "axios";
import EventPagination from "components/Pagination/EventPagination";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Event, EventPage } from "types/event";
import { API_URL } from "utils/request";

type Props = {
	events: Array<Event>;
}

const EventDataTable = ({events}: Props) => {

    const [activePage, setActivePage] = useState(0);
    const [page, setPage] = useState<EventPage>({
        first: true,
        last: true,
        number: 0,
        totalElements: 0,
        totalPages: 0
    });

    /*useEffect(() => {
        axios.get(`${API_URL}/events?page=${activePage}&size=15&sort=date,desc`)
        .then(response => {
            setPage(response.data);
        })
		setPage(events);
    }, [activePage]);*/

    const changePage = (index: number) => {
        setActivePage(index);
    }

    return(
        <>
            <EventPagination page = {page} onPageChange = {changePage}/> 
			<div className="table-responsive">  
				<table className="table hover" >
					<thead>
						<tr>
							<th scope="col">Nome do evento</th>
							<th scope="col">Local</th>
							<th scope="col">Data</th>
							<th scope="col">Hora</th>
						</tr>
					</thead>
					<tbody>
						{events.map(event =>(
							<tr key={ event.id }>
								<td>
									<Link to="/guests"> { event.name }</Link>
								</td>
								<td>{ event.address }</td>
								<td>{ event.date }</td>
								<td>{ event.time }</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
        </>
    );
}

export default EventDataTable;