import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Hero.css";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
    const heroRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!heroRef.current) return;

        const ctx = gsap.context(() => {
            const sel = gsap.utils.selector(heroRef);

            const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            if (prefersReduced) {
                gsap.set(sel(".intro, .name, .tagline, .description, .hero-button"), { opacity: 1, y: 0 });
                return;
            }

            gsap.timeline({
                defaults: { duration: 0.8, ease: "power3.out" },
                scrollTrigger: {
                    trigger: heroRef.current!,
                    start: "top 80%",
                    toggleActions: "play none none none", // play once and keep end state
                    once: true,
                    // markers: true,
                },
            })
            .from(sel(".intro"), { y: 24, opacity: 0 })
            .from(sel(".name"), { y: 28, opacity: 0 }, "-=0.4")
            .from(sel(".tagline"), { y: 28, opacity: 0 }, "-=0.35")
            .from(sel(".description"), { y: 28, opacity: 0 }, "-=0.35")
            .from(sel(".hero-button"), { y: 28, opacity: 0 }, "-=0.35");
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="hero" id="hero" ref={heroRef}>
            <div className="hero-content">
                <p className="intro fade-up">Hi, my name is</p>
                <h1 className="name fade-up">Your Name</h1>
                <h2 className="tagline fade-up">I build things for the web.</h2>
                <p className="description fade-up">
                    I’m a software engineer specializing in building exceptional digital
                    experiences.
                </p>
                <a href="#projects" className="hero-button fade-up">
                    View My Work
                </a>
            </div>
        </section>
    );
};