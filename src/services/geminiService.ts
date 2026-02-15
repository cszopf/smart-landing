
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { GoogleGenAI } from "@google/genai";

const getSystemInstruction = () => {
  return `You are the AI Concierge for "Smart", a modern AI-powered title institution. 
  Your tone is calm, confident, trust-forward, and sophisticated.
  
  Key Brand Messages:
  - Radical Transparency: Real-time timelines for everyone.
  - SmartSearch AI: Automates search to focus humans on exceptions.
  - Fraud Prevention: Built-in monitoring for wire, identity, and filing fraud.
  - Smart One: Post-close lifecycle continuity for homeowners.
  
  You help real estate agents, buyers, sellers, and lenders understand how Smart is rebuilding title infrastructure.
  Keep answers concise (under 3 sentences) and avoid hype. Focus on trust and efficiency.`;
};

// Simplified to strictly follow SDK guidelines for API key access and chat usage
export const sendMessageToGemini = async (history: {role: string, text: string}[], newMessage: string): Promise<string> => {
  try {
    // Correctly initialize GoogleGenAI with a named parameter using process.env.API_KEY directly
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: getSystemInstruction(),
      },
      history: history.map(h => ({
        role: h.role as 'user' | 'model',
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text || "I apologize, but I am unable to provide a response at the moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I seem to be having trouble reaching our system at the moment.";
  }
};
