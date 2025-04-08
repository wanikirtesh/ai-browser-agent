require('dotenv').config(); // Load .env file variables
const { GenerativeModel, GoogleGenerativeAI } = require('@google/generative-ai');

// Initialize the Generative AI client
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

//const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
//const model = genAI.getGenerativeModel({ model: "gemini-pro" }); // Or your preferred model


async function listAvailableModels() {
    try {
      // You might need to get an instance of a model (even without a specific name)
      // to access the listModels method. This might vary based on the library version.
      const model = genAI.getGenerativeModel({ model: 'gemini-pro' }); // Or any available model
  
      const listResult = await model.listModels();
      console.log("Available Models:");
      listResult.models.forEach(modelInfo => {
        console.log(`- Name: ${modelInfo.name}`);
        console.log(`  Supported Methods: ${modelInfo.supportedGenerationMethods}`);
        console.log(`  API Version: ${modelInfo.version}`);
        console.log("---");
      });
    } catch (error) {
      console.error("Error listing models:", error);
    }
  }
  
  listAvailableModels();