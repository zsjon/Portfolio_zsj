import "./Navbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {useEffect} from "react";
import {initialTheme, toggleTheme} from "../../utils/Theme.tsx";

export const Navbar = () => {
    useEffect(() => {
        initialTheme();
    }, []);
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
            <div className="theme">
                <i className="fa-regular fa-moon" onClick={toggleTheme}></i>
            </div>
        </nav>
    );
};