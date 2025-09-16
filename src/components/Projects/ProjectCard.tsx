import "./ProjectCard.css";

type ProjectCardProps = {
    title: string;
    description: string;
    image: string;
    live: string;
    source: string;
};

export const ProjectCard = ({
                                title,
                                description,
                                image,
                                live,
                                source,
                            }: ProjectCardProps) => {
    return (
        <div className="project-card">
            <img src={image} alt={title} className="project-image" />
            <div className="project-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="project-links">
                    <a href={live} target="_blank" rel="noopener noreferrer">
                        상세 보기
                    </a>
                    <a href={source} target="_blank" rel="noopener noreferrer">
                        코드
                    </a>
                </div>
            </div>
        </div>
    );
};