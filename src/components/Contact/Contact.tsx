import "./Contact.css";

export const Contact = () => {
    return (
        <section id="contact" className="contact">
            <h2>Contact Me</h2>
            <p>
                궁금한 점이 있거나 협업을 원하시면 아래의 링크를 통해 언제든지 연락 주세요!
            </p>
            <a className="contact-btn" href="mailto:cho010105@naver.com">
                Say Hello 👋
            </a>
        </section>
    );
};