import { GuestPage } from "types/guest";

type Props = {
    page: GuestPage;
    onPageChange: Function;
}


const GuestPagination = ( {page, onPageChange} : Props ) => {
    return(
        <nav aria-label="Page navigation">
            <ul className="pagination justify-content-end">
                <li className={`page-item ${page.first ? 'disabled' : 'active'}`}>
                    <a className="page-link" href="#a" onClick={() => onPageChange(page.number - 1)}>Anterior</a>
                </li>
                <li className="page-item disabled">
                    <a className="page-link" href="#s">{ page.number + 1 }</a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#s" onClick={() => onPageChange(page.number - 1)}>Próximo</a>
                </li>
            </ul>
        </nav>
    );
}

export default GuestPagination;