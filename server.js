const express = require("express");
const OpenAI = require("openai");
require("dotenv").config();

const app = express();

app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.post("/chat", async (req, res) => {

  try {

    const message = req.body.message;

    const result = await client.responses.create({
      model: "gpt-5-mini",
      instructions:
        "あなたはEDITHという未来型AIアシスタントです。丁寧で分かりやすく、親しみやすく答えてください。",
      input: message
    });

    res.json({
      reply: result.output_text
    });

  } catch (error) {

    console.error(error);

    res.json({
      reply: "申し訳ありません。現在AIに接続できません。しばらくしてからもう一度お試しください。"
    });

  }

});

app.get("/", (req, res) => {

  res.send("EDITH AI SERVER ONLINE");

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

  console.log("EDITH AI ONLINE");

});
