const axios = require("axios");
require("dotenv").config();

const API_KEY = process.env.GEMINI_API_KEY;

async function listModels() {
  try {
    const response = await axios.get(`https://generativelanguage.googleapis.com/v1/models?key=${API_KEY}`);
    console.log("✅ Available models:");
    response.data.models.forEach(m => {
      console.log(`- ${m.name}`);
    });
  } catch (err) {
    console.error("❌ Failed to list models:", err.response?.data || err.message);
  }
}

listModels();
