const { GoogleGenAI }= require ("@google/genai");

const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY});

async function main(msg) {
 try {
   const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: msg,
  });
   return response.text
 } catch (error) {
    console.error("Error occurred while generating content:", error);
    throw error;
 }
}

module.exports=main

