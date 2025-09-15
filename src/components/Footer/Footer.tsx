import "./Footer.css";

export const Footer = () => {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} ZSJ. All Rights Reserved.</p>
            <div className="socials">
                <a href="https://github.com/yourname" target="_blank">GitHub</a>
                <a href="https://linkedin.com/in/yourname" target="_blank">LinkedIn</a>
            </div>
        </footer>
    );
};