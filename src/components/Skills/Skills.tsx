import { skills } from "../../data/skills";
import "./Skills.css";

export const Skills = () => {
    return (
        <section id="skills" className="skills">
            <h2>Tech Skills</h2>
            <div className="skills-grid">
                {skills.map((s) => (
                    <div key={s.name} className="skill-card">
                        <img src={s.icon} alt={s.name} className="skill-icon" />
                        <p>{s.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};