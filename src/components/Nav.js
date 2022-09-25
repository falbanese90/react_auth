import '../css/Nav.css';
import useAuth from '../hooks/useAuth';

import { Link } from 'react-router-dom';

const Nav = () => {
    const { auth } = useAuth();
    if (auth.accessToken) {
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark"> <button className="navbar-toggler" type="button" data-target="#navigation"> <span className="navbar-toggler-icon"></span> </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item active"> <Link to={'/'} className='nav-link'> Home </Link> </li>
                        <li className="nav-item"> <Link to={'/about'} className='nav-link'> About </Link> </li>
                        <li className="nav-item"> <Link to={'/admin'} className='nav-link'> Admin </Link> </li>
                    </ul>
                </div>
            </nav>
        )
    }
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark"> <button className="navbar-toggler" type="button" data-target="#navigation"> <span className="navbar-toggler-icon"></span> </button>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    <li className="nav-item active"> <Link to={'/'} className='nav-link'> Home </Link> </li>
                    <li className="nav-item"> <Link to={'/login'} className='nav-link'> Login </Link> </li>
                    <li className="nav-item"> <Link to={'/admin'} className='nav-link'> Admin </Link> </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav