import { GoogleGenAI } from "@google/genai";
import { ENV } from "../config/env";
import { PERSONA } from "../config/persona";

const ai = new GoogleGenAI({ apiKey: ENV.GEMINI_API_KEY });

export async function getGeminiReply(userMessage: string): Promise<string> {
    const fullPrompt =
        PERSONA.system.trim() + "\n\nUser: " + userMessage + "\nAssistant";

    const res = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: fullPrompt,
    });

    return res.text || "Sorry, I couldn't process that.";
}
