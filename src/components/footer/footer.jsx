import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <ul className="footer-nav-menu">
                <div className="first">
                    <li>
                        <NavLink to="/" className="navbar-item">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" className="navbar-item">
                            Customer Care
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" className="navbar-item">
                            Instgram
                        </NavLink>
                    </li>
                </div>
                <div className="last">
                    <li>© Pretend Store</li>
                </div>
            </ul>
        </footer>
    );
};
