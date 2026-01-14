import { GoogleGenAI } from "@google/genai";
import { PROJECTS, EXPERIENCES, SKILLS } from "../constants";
import { ChatMessage } from "../types";

const SYSTEM_INSTRUCTION = `
You are the professional virtual assistant for Muhammad Ibrahim, a skilled Full-Stack Developer.

Professional Profile:
- Name: Muhammad Ibrahim
- Location: Karachi, Pakistan
- Role: Full-Stack Developer specializing in software architecture and modern UI/UX.
- Affiliation: Proud Scrimba Ambassador. Users can join Scrimba via his link: https://scrimba.com/?via=u432d432
- Key Expertise: React, TypeScript, Node.js, PHP, Laravel, .NET Core, C#, and AI integration.
- Education & Training: Aptech Learning (ACCP-AI Specialist), Scrimba Frontend Developer Path.
- Professional Focus: Delivering high-quality, accessible, and high-performance digital solutions.

Contextual Data:
- Projects: ${JSON.stringify(PROJECTS)}
- Professional Experience: ${JSON.stringify(EXPERIENCES)}
- Technical Skills: ${JSON.stringify(SKILLS)}

Interaction Guidelines:
- Tone: Professional, helpful, and direct.
- Communication: Provide concise info about Ibrahim's work. Mention his Scrimba Ambassador status if education or Scrimba is mentioned.
- Contact: Direct collaboration or business inquiries to muhammadibrahimshuja34@gmail.com.
- Goal: Help potential employers or collaborators understand Ibrahim's value proposition.
`;

export const getAIResponse = async (userInput: string, history: ChatMessage[]) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const formattedHistory = history.map(msg => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    }));

    const chat = ai.chats.create({
      model: "gemini-3-flash-preview",
      history: formattedHistory as any,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topK: 40,
        topP: 0.9,
      },
    });

    const response = await chat.sendMessage({
      message: userInput,
    });

    return response.text;
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return "I'm currently unable to process your request. Please reach out to Muhammad Ibrahim directly at muhammadibrahimshuja34@gmail.com.";
  }
};