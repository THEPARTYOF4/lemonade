import 'dotenv/config';
import fs from 'fs';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const systemInstructions = fs.readFileSync('./system_instructions.txt', 'utf8');
console.log("Key loaded:", !!process.env.GEMINI_API_KEY);

async function ai_analyzePitch(userPitch) {
  const model = ai.getGenerativeModel({ 
    model: "gemini-3-flash-preview",
    systemInstruction: systemInstructions 
  });

  const result = await model.generateContent(userPitch);
  
  console.log(result.response.text());
}

async function ai_generatePitchSection(){

}
  
async function ai_chatResponse(params) {

}

async function ai_reviewPitch(){

}

async function analyzeDelivery(params) {
    
}
