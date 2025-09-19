import { useState } from "react";
import { skills } from "../../data/skills";
import "./Skills.css";

export const Skills = () => {
    const categories = [...new Set(skills.map((s) => s.type))];
    const [activeTab, setActiveTab] = useState(categories[0]);

    return (
        <section id="skills" className="skills">
            <h2>Tech Skills</h2>

            <div className="tabs">
                {categories.map((c) => (
                    <button
                        key={c}
                        className={`tab-btn ${activeTab === c ? "active" : ""}`}
                        onClick={() => setActiveTab(c)}
                    >
                        {c}
                    </button>
                ))}
            </div>

            <div className="skills-grid">
                {skills
                    .filter((s) => s.type === activeTab)
                    .map((s) => (
                        <div key={s.name} className="skill-card">
                            <img src={s.icon} alt={s.name} className="skill-icon" />
                            <p>{s.name}</p>
                        </div>
                    ))}
            </div>
        </section>
    );
};