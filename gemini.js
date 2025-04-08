require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function askGemini(prompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
  const result = await model.generateContent("Respond with only valid Node.js JavaScript code using Playwright. No explanations. also add error handler to async function. use chrome visible browser. " + prompt);
  return result.response.text();
}

// 👇 THIS is important
module.exports = { askGemini };
