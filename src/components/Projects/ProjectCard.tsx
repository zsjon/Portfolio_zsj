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
                        Live
                    </a>
                    <a href={source} target="_blank" rel="noopener noreferrer">
                        Code
                    </a>
                </div>
            </div>
        </div>
    );
};