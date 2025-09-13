import classes from "./MainNavigation.module.css";

function MainNavigation() {
    return (
        <nav className={classes.nav}>
            <ul>
                <li>
                    <a className={classes.active} href="">
                        Home
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default MainNavigation;
