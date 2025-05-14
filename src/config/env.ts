import dotenv from "dotenv";
dotenv.config();

export const ENV = {
    PORT: process.env.PORT || 3000,
    GEMINI_API_KEY: process.env.GEMINI_API_KEY!,
    WASENDER_API_KEY: process.env.WASENDER_API_KEY!,
    WASENDER_BASE_URL:
        process.env.WASENDER_BASE_URL || "https://www.wasenderapi.com/api",
};
