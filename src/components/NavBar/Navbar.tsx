import "./Navbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {useEffect, useState} from "react";
import {toggleTheme} from "../../utils/Theme.tsx";

export const Navbar = () => {
    const [theme, setTheme] = useState("light");
    useEffect(() => {
        const updateTheme = () => {
            const isDark = document.documentElement.classList.contains("dark") || document.documentElement.classList.contains("dark-from-html");
            setTheme(isDark ? "dark" : "light");
        };
        updateTheme();
        window.addEventListener("theme-change", updateTheme);
        return () => {window.removeEventListener("theme-change", updateTheme);}
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
                <i className={theme === "dark" ? "fa-regular fa-sun" : "fa-regular fa-moon"}
                   onClick={toggleTheme}></i>
            </div>
        </nav>
    );
};