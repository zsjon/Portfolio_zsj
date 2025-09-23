// ProjectDetail.tsx
import { useEffect, useState } from "react";
import { NotionRenderer } from "react-notion-x";
import "react-notion-x/src/styles.css";
import "prismjs/themes/prism.css"; // 코드 블럭용
import "katex/dist/katex.min.css";

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
            <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} />
        </div>
    );
}

export default ProjectDetail;