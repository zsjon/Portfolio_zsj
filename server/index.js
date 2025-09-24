//Notion API를 사용하여 데이터베이스에서 데이터를 가져오는 Express 서버
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// import { Client } from "@notionhq/client";
import {NotionAPI} from "notion-client";

dotenv.config();
const app = express();
app.use(cors({
    origin: [
        "http://localhost:5173",
        "http://localhost:3000",
        "https://portfolio-zsj.vercel.app",
        "https://zsj-portfolio.o-r.kr",
    ],
    credentials: true,
}));
app.use(express.json());

const notionApi = new NotionAPI();

// alb health check용
app.get("/", (req, res) => {
    res.status(200).send("ok");
});

// Notion 페이지 데이터 가져오는 용
app.get("/api/notion/page/:id", async (req, res) => {
    try {
        const pageId = req.params.id;
        const recordMap = await notionApi.getPage(pageId);
        res.json(recordMap);
    } catch (err) {
        console.error(" Notion 페이지 로드 실패:", err);
        res.status(500).json({error: "Notion 페이지 로드 실패"});
    }
});

app.listen(5000, () => console.log("Express 서버 실행 (포트 5000)"));