import { useEffect, useState } from "react";
import { NotionRenderer } from "react-notion-x";
import "react-notion-x/src/styles.css";
import "prismjs/themes/prism.css";
import "katex/dist/katex.min.css";
import "./ProjectDetail.css";

function ProjectDetail({ notionPageId }: { notionPageId: string }) {
    const [recordMap, setRecordMap] = useState<any>(null);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_NOTION_API_URL}${notionPageId}`)
            .then((res) => res.json())
            .then((data) => {
                setRecordMap(data);
            });
    }, [notionPageId]);

    if (!recordMap) return <p>Loading...</p>;

    return (
        <div className="notion-page">
            <NotionRenderer recordMap={recordMap} fullPage={false} darkMode={false} />
        </div>
    );
}

export default ProjectDetail;