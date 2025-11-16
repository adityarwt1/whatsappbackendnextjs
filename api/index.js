import express from "express";
import serverless from "serverless-http";

const app = express();

app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.json({ message: "Hello from Express on Vercel!" });
});

app.get("/ping", (req, res) => {
  res.send("pong");
});

// ESM export
export const handler = serverless(app);
export default app;
