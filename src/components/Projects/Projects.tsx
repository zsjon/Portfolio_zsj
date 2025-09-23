import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";
import "./Projects.css";

gsap.registerPlugin(ScrollTrigger);

export const Projects = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(false);
    const [notionPageId, setNotionPageId] = useState<string | null>(null);

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

    const handleDetail = (pageId: string) => {
        setNotionPageId(pageId);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setNotionPageId(null);
    };

    return (
        <section className="projects" id="projects" ref={sectionRef}>
            <h2 className="section-title">My Projects</h2>
            <div className="projects-grid">
                {projects.map((p) => (
                    <ProjectCard
                        key={p.id}
                        {...p}
                        onDetail={p.notionPageId ? () => handleDetail(p.notionPageId!) : undefined}
                    />
                ))}
            </div>
            {open && notionPageId && (
                <div className="modal-overlay" onClick={handleClose}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={handleClose}>X</button>
                        <ProjectDetail notionPageId={notionPageId} />
                    </div>
                </div>
            )}
        </section>
    );
};
