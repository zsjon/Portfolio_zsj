import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";
import "./Projects.css";

gsap.registerPlugin(ScrollTrigger);

export const Projects = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (sectionRef.current) {
            const cards = gsap.utils.toArray<HTMLDivElement>(".project-card");

            cards.forEach((card) => {
                gsap.fromTo(
                    card,
                    { y: 60, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            });
        }
    }, []);

    return (
        <section className="projects" id="projects" ref={sectionRef}>
            <h2 className="section-title">My Projects</h2>
            <div className="projects-grid">
                {projects.map((p) => (
                    <ProjectCard key={p.id} {...p} />
                ))}
            </div>
        </section>
    );
};