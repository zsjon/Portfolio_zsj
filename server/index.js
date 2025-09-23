//Notion API를 사용하여 데이터베이스에서 데이터를 가져오는 Express 서버
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Client } from "@notionhq/client";

dotenv.config();
const app = express();
app.use(cors({ origin: "https://portfolio-zsj.vercel.app/" }));
app.use(express.json());

const notion = new Client({ auth: process.env.NOTION_TOKEN });

app.get("/api/notion", async (req, res) => {
    try {
        const response = await notion.databases.query({
            database_id: process.env.NOTION_DATABASE_ID,
        });
        res.json(response);
    } catch (err) {
        res.status(500).json({ error: "Notion API 호출 실패" });
    }
});

app.listen(5000, () => console.log("Express 서버 실행 (포트 5000)"));