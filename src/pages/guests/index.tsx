import GuestDataTable from "components/DataTable/GuestDataTable";
import GuestForm from "components/Forms/GestsForm";
import FixedTopNavbar from "components/Navbar";

const Guests = () => {
    return(
        <>
            <header>
                <FixedTopNavbar />
            </header>
            <div className="container my-5">
                <GuestForm />
                <hr className="mt-2 mb-2" />
                <h4>Lista de convidados</h4>
                <GuestDataTable />
            </div>
        </>
    );
}

export default Guests;