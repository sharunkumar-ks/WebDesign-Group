import Link from "next/link"
import { trpc } from "../utils/trpc";
import { signIn, signOut, useSession } from "next-auth/react";


const Navbar = () => <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
        <Link href={"/"} className="navbar-brand">
            RoomTree
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link href={"/catalog"} className="nav-link active">
                        Catalog
                    </Link>
                </li>
                {/* <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#" aria-disabled="true">Disabled</a>
                </li> */}
            </ul>
            <AuthShowcase />
        </div>
    </div>
</nav>

export default Navbar

const AuthShowcase: React.FC = () => {
    const { data: sessionData } = useSession();

    return (
        <div className="">
            <div className="text-center text-2xl text-white my-1">
                {sessionData && <span>Logged in as {sessionData.user?.name} &nbsp;&nbsp;</span>}
                <button
                    className={`btn btn-${sessionData ? 'danger' : 'primary'}`}
                    onClick={sessionData ? () => signOut() : () => signIn()}
                >
                    {sessionData ? "Sign out" : "Sign in"}
                </button>
            </div>

        </div>
    );
};
