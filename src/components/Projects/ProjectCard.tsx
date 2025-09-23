import "./ProjectCard.css";

type ProjectCardProps = {
    title: string;
    description: string;
    image: string;
    live?: string;
    source?: string;
    notice?: string;
    onDetail?: (e: React.MouseEvent) => void;
};

export const ProjectCard = ({
                                title,
                                description,
                                image,
                                live,
                                source,
                                notice,
                                onDetail,
                            }: ProjectCardProps) => {
    return (
        <div className="project-card">
            <img src={image} alt={title} className="project-image" />
            <div className="project-content">
                <h3>{title}</h3>
                <p>{description}</p>
                {notice && <p className="notice">{notice}</p>}
                <div className="project-links">
                    {live && (
                        <a href={live} target="_blank" rel="noopener noreferrer">
                            Site
                        </a>
                    )}
                    {source && (
                        <a href={source} target="_blank" rel="noopener noreferrer">
                            Code
                        </a>
                    )}
                    {onDetail && (
                        <a href="#" onClick={e => { e.preventDefault(); onDetail(e); }}>
                            Detail
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};
