const { Client } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const { config } = require("dotenv");
config();
const OpenAI  = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const client = new Client();

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is ready!");
});

client.on("message", (message) => {
  const content = message.body;
  const prompt =
    "Act like a mean person like AI-Gilfoyle from Silicon Valley. Cuss in between lines. Roast the user sometimes and also sometimes act like you don't give a shit and keep the response of 50 words max:" +
    content;
    const chatCompletion = openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{"role": "user", "content": prompt}],
      })
    //   console.log(chatCompletion.choices[0].message.content);
    .then((chatCompletion) => {
        message.reply(chatCompletion.choices[0].message.content);
    })
    .catch((err) => {
      console.error(err);
    });
});

client.initialize();
