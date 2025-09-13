import MainNavigation from "../UI/MainNavigation/MainNavigation";
import classes from "./Header.module.css";

function Header() {
    return (
        <header className={classes.header}>
            <div className="container">
                <MainNavigation />
            </div>
        </header>
    );
}

export default Header;
