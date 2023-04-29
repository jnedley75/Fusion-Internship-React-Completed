import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";
import {useNavigate} from "react-router-dom"
import FusionLogo from '../assets/Fusion-Logo.png'
import '../styles/nav/NavBar.css'

export default function NavBar() {
    const navigate = useNavigate();
    return (
        <>
            <Navbar
                className="navbar-dark"
                color="dark"
                dark
            >
                <NavbarBrand href="/">
                    <img
                        alt="logo"
                        src={FusionLogo}
                        className="logo"
                    />
                </NavbarBrand>
                <Nav className="me-auto" navbar>
                    <NavItem className="navItem">
                        <NavLink onClick={()=>navigate("/Login")}>Login</NavLink>
                    </NavItem>
                    <NavItem className="navItem">
                        <NavLink onClick={()=>navigate("/")}>Page 2</NavLink>
                    </NavItem>
                    <NavItem className="navItem">
                        <NavLink onClick={()=>navigate("/")}>Page 3</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </>
    )
}