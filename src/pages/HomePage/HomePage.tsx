import classes from "./HomePage.module.css";

function HomePage() {
    return (
        <section className={classes.home}>
            <div className="container">
                <div className={classes.developerInfo}>
                    <h1>Developer Name</h1>
                    <h3>React Front-End Developer</h3>
                </div>

                <div className={classes.techStack}>
                    <h2>Tech Stack of Project</h2>
                    <ul>
                        <li>TypeScript</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>React-Router</li>
                        <li>Vite</li>
                    </ul>
                </div>

                <div className={classes.features}>
                    <h2>Features</h2>
                    <ul>
                        <li>Routing</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default HomePage;
