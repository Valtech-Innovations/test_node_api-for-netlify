import express, { Router } from "express";
import serverless from "serverless-http";

const api = express();
const router = Router();

router.get("/", (req, res) => {
    res.send("Hello User. API started => Try : /api/hello or /api/data");
});

api.use("/", router);

export const handler = serverless(api);
