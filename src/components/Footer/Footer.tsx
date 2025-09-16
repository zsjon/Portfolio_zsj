import "./Footer.css";
import { useState } from "react";

export const Footer = () => {
    const [showTooltip, setShowTooltip] = useState(false);
    const handleCopyEmail = () => {
        navigator.clipboard.writeText("cho010105@naver.com");
        alert("이메일이 복사되었습니다!");
    };
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} Minseong Cho. All Rights Reserved.</p>
            <div className="socials">
                <a href="https://github.com/zsjon" target="_blank">GitHub</a>
                <a href="https://www.linkedin.com/in/%EB%AF%BC%EC%84%B1-%EC%A1%B0-b61b7b2b8/" target="_blank">LinkedIn</a>
                <a href="https://velog.io/@zsj_tapout/posts" target="_blank">Blog</a>
                <span
                    className="email-tooltip-wrapper"
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                >
                    <a href="#" onClick={e => {e.preventDefault(); handleCopyEmail();}}>Email</a>
                    {showTooltip && (
                        <span className="email-tooltip">cho010105@naver.com</span>
                    )}
                </span>            </div>
        </footer>
    );
};