import axios from "axios";
import GuestPagination from "components/Pagination/GuestPagination";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { GuestPage } from "types/guest";
import { API_URL } from "utils/request";

const GuestDataTable = () => {

    const[activePage, setActivePage] = useState(0);
    const[page, setPage] = useState<GuestPage>({
        first: true,
        last: true,
        number: 0,
        totalElements: 0,
        totalPages: 0
    });

    useEffect(() => {
        axios.get(`${API_URL}/guests?page=${activePage}&size=15&sort=date,desc`).then(
            response => {
                setPage(response.data);
            }
        )
    }, [activePage]);

    const changePage = (index: number) => {
        setActivePage(index);
    };

    return(
        <>
            <GuestPagination page={page} onPageChange={changePage} />
            <Table responsive hover>
                <thead>
                    <tr>
                        <th scope="col">Nome do convidado</th>
                        <th scope="col">Mesa</th>
                    </tr>
                </thead>
                <tbody>
					{/*{page.content?.map(guest => (
                        <tr key={ guest.id }>
                            <td>{ guest.name }</td>
                            <td>{ guest.table }</td>
                        </tr>
					))} */}
					<tr>
						<td>CMJ</td>
						<td>Kurama</td>
					</tr>
					<tr>
						<td>CMJ</td>
						<td>Kizami</td>
					</tr>
					<tr>
						<td>CMJ</td>
						<td>Son Goku</td>
					</tr>
					<tr>
						<td>CMJ</td>
						<td>Kurama</td>
					</tr>
                </tbody>
            </Table>
        </>
    );
}

export default GuestDataTable;