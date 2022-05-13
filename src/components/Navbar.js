import CartWidget from './CartWidget';
import logo from './logoTupik.png';
import {Stack} from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="App">
            <header>
            <Stack direction="horizontal" gap={3}>
            <Link to='/'><img src ={logo} width="250" height="auto"/></Link>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                    <a className="navbar-brand"></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to='/category/paisajes' style={{textDecoration: "none", color: "white"}}>Paisajes</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/category/playas' style={{textDecoration: "none", color: "white"}}>Playas</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/category/noche' style={{textDecoration: "none", color: "white"}}>Noche</Link>
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>
                <CartWidget />
                </Stack>
            </header>
        </div>
    );

}

export default Navbar;