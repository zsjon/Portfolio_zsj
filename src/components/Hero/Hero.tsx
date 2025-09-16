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
                <p className="intro fade-up">FrontEnd Developer</p>
                <h1 className="name fade-up">안녕하세요, 조민성입니다.</h1>
                <h2 className="tagline fade-up">함께 소통하고 쌓아나가는 것을 목표로 하는<br/>프론트엔드 개발자입니다.</h2>
                <p className="description fade-up">
                    항상 사용자의 관점으로 생각하며, 더 나은 사용자 경험을 제공하기 위해 노력합니다.
                </p>
                <button
                    className="hero-button fade-up"
                    onClick={() => {
                        document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                    }}
                >
                    View My Work
                </button>
            </div>
        </section>
    );
};