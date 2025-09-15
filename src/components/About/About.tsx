import "./About.css";

export const About = () => {
    return (
        <section id="about" className="about">
            <h2>About Me</h2>
            <div className="about-content">
                <img src="/profile.jpg" alt="Profile" className="profile-img" />
                <p>
                    Hello! I'm ZSJ, a passionate software engineer who loves building web
                    applications with React, TypeScript, and modern frameworks. I enjoy
                    crafting smooth user experiences and solving real-world problems with
                    clean code.
                </p>
            </div>
        </section>
    );
};