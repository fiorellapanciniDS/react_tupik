import CartWidget from './CartWidget';
import logo from './logoTupik.png';
import {Stack} from "react-bootstrap";

const Navbar = () => {
    return (
        <div className="App">
            <header>
            <Stack direction="horizontal" gap={3}>
                <img src ={logo} width="250" height="auto"/>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                    <a className="navbar-brand"></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Imagenes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Vectores</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Ilustraciones</a>
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