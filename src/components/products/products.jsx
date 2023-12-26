import { NavLink } from "react-router-dom";
import Items from "./items";

export default function Products() {

    return (
        <div className="products">
            <Items />
            <div className="more-products-container">
                <NavLink to="/#" className="more-products">
                    MORE PRODUCTS
                </NavLink>
            </div>
        </div>
    );
};
