import express, { Response, Request } from "express";
import { NewsController } from "../controllers/News";

const router = express.Router();

router.get("/news", (req: Request, res: Response) =>
  NewsController.getNews(req, res)
);

router.get("/news/:id", (req: Request, res: Response) =>
  NewsController.getNewsById(req, res)
);

router.post("/news", (req: Request, res: Response) =>
  NewsController.addNews(req, res)
);

export default router;
