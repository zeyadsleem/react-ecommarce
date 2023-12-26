import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <nav>
                <ul className="nav-menu">
                    <div className="left">
                        <li>
                            <NavLink className="navbar-item" to="/">
                                <img src="/img/logo.svg" alt="logo" />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="navbar-item" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="navbar-item" to="/">
                                Collection
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="navbar-item" to="/">
                                Contact
                            </NavLink>
                        </li>
                    </div>
                    <div className="right">
                        <li>
                            <NavLink className="navbar-item width flex " to="/cart">
                                {/*     {cartCount > 0 && <p className="cart-tag">{props.cartCount}</p>} */}
                                <img src="/img/cart.svg" alt="cart-icon" />
                                <p className="cart-tag">Cart</p>
                            </NavLink>
                        </li>
                    </div>
                </ul>
            </nav>
        </header>
    );
};
