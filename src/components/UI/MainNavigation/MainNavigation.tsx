import { NavLink, type NavLinkRenderProps } from "react-router";
import classes from "./MainNavigation.module.css";

function setActiveLink({ isActive }: NavLinkRenderProps) {
    return isActive ? classes.active : undefined;
}

function MainNavigation() {
    return (
        <nav className={classes.nav}>
            <ul>
                <li>
                    <NavLink className={setActiveLink} to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink className={setActiveLink} to="products">
                        Products
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default MainNavigation;
