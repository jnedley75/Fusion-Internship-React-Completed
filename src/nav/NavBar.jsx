import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";
import {useNavigate} from "react-router-dom"
import FusionLogo from '../assets/Fusion-Logo.png'
import '../styles/nav/NavBar.css'
import {useCookies} from "react-cookie";

export default function NavBar() {
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(['loggedIn', 'userInfo']);

    function logout() {
        removeCookie("loggedIn")
        removeCookie("userInfo")
        removeCookie("g_state")
        navigate("/")
    }

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
                    {!cookies.loggedIn ?
                        <>
                            <NavItem className="navItem">
                                <NavLink onClick={()=>navigate("/LoggedIn")}>Login</NavLink>
                            </NavItem>
                            <NavItem className="navItem">
                                <NavLink onClick={()=>navigate("/Register")}>Register</NavLink>
                            </NavItem>
                        </>
                        :
                        <>
                            <NavItem className="navItem">
                                <NavLink onClick={()=>navigate("/LoggedIn")}>Dashboard</NavLink>
                            </NavItem>
                            <NavItem className="navItem">
                                <NavLink onClick={()=>navigate("/")}>View Users</NavLink>
                            </NavItem>
                        </>
                    }
                </Nav>
                <Nav className="ms-auto" navbar>
                    {cookies.loggedIn &&
                        <>
                            <NavItem className="navItem">
                                <NavLink className='g_id_signout' onClick={logout}>Logout</NavLink>
                            </NavItem>
                        </>
                    }
                </Nav>
            </Navbar>
        </>
    )
}