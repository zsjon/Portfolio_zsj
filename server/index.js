//Notion API를 사용하여 데이터베이스에서 데이터를 가져오는 Express 서버
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Client } from "@notionhq/client";
import { NotionAPI } from "notion-client";

dotenv.config();
const app = express();
app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://localhost:3000",
    "https://portfolio-zsj.vercel.app",
  ],
  credentials: true,
}));
app.use(express.json());

const notionApi = new NotionAPI();

// const notion = new Client({ auth: process.env.NOTION_TOKEN });

// app.get("/api/notion", async (req, res) => {
//     try {
//         const response = await notion.dataSources.query({
//             data_source_id: process.env.NOTION_DATA_SOURCE_ID,
//         });
//         res.json(response);
//     } catch (err) {
//         console.error("에러 전체:", err);
//         console.error("에러 body:", err.body);
//         res.status(500).json({ error: "Notion Data Source 호출 실패" });
//     }
// });

// app.get("/api/notion/page/:id", async (req, res) => {
//     const pageId = req.params.id;
//     try {
//         const blocks = await notion.blocks.children.list({ block_id: pageId });
//         res.json(blocks);
//     } catch (err) {
//         res.status(500).json({ error: "페이지 불러오기 실패" });
//     }
// });

app.get("/api/notion/page/:id", async (req, res) => {
    try {
        const pageId = req.params.id;
        const recordMap = await notionApi.getPage(pageId);
        res.json(recordMap);
    } catch (err) {
        console.error(" Notion 페이지 로드 실패:", err);
        res.status(500).json({ error: "Notion 페이지 로드 실패" });
    }
});

app.listen(5000, () => console.log("Express 서버 실행 (포트 5000)"));