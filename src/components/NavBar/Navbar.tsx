import "./Navbar.css";

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">Minseong's House</div>
            <ul className="nav-links">
                <li>
                    <button
                        className="nav-link"
                        onClick={() => {
                            document.querySelector("#hero")?.scrollIntoView({behavior: "smooth"});
                        }}
                    >
                        Home
                    </button>
                </li>
                <li>
                    <button
                        className="nav-link"
                        onClick={() => {
                            document.querySelector("#about")?.scrollIntoView({behavior: "smooth"});
                        }}
                    >
                        About
                    </button>
                </li>
                <li>
                    <button
                        className="nav-link"
                        onClick={() => {
                            document.querySelector("#skills")?.scrollIntoView({behavior: "smooth"});
                        }}
                    >
                        Skills
                    </button>
                </li>
                <li>
                    <button
                        className="nav-link"
                        onClick={() => {
                            document.querySelector("#projects")?.scrollIntoView({behavior: "smooth"});
                        }}
                    >
                        Projects
                    </button>
                </li>
                <li>
                    <button
                        className="nav-link"
                        onClick={() => {
                            document.querySelector("#contact")?.scrollIntoView({behavior: "smooth"});
                        }}
                    >
                        Contact
                    </button>
                </li>
            </ul>
        </nav>
    );
};