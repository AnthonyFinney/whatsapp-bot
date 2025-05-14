import { GoogleGenAI } from "@google/genai";
import { ENV } from "../config/env";

const ai = new GoogleGenAI({ apiKey: ENV.GEMINI_API_KEY });

export async function getGeminiReply(prompt: string): Promise<string> {
    const res = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt,
    });

    return res.text || "Sorry, I couldn't process that.";
}
