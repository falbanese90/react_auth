import '../css/Nav.css';
import useAuth from '../hooks/useAuth';

import { Link } from 'react-router-dom';

const Nav = () => {
    const { auth } = useAuth();
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark"> <button className="navbar-toggler" type="button" data-target="#navigation"> <span className="navbar-toggler-icon"></span> </button>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav">

                </ul>
            </div>
        </nav>
    )
}


export default Nav