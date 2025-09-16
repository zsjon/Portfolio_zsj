import "./About.css";
import {baseUrl} from "../../data/skills.ts";

export const About = () => {
    return (
        <section id="about" className="about">
            <h2>About Me</h2>
            <div className="about-content">
                <img src={`${baseUrl}/profile/test3.png`} alt="Profile" className="profile-img" />
                <p>
                    저는 ‘나와 상대가 함께 성장할 수 있는가’를 가장 중요하게 생각합니다.
                    저는 평소 프로젝트를 진행할 때 결과물이 사용자에게 어떤 효과를 줄 수 있을지, 이를 통해 어떤 사회를 이끌어낼 수 있는지를 고려합니다.
                    또한 팀원들이 어려움을 겪으면, 함께 해결책을 찾고 주어진 과제를 완수하기 위해 최선을 다합니다.
                </p>
            </div>
        </section>
    );
};