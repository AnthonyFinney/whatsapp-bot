import { Request, Response } from "express";
import { getGeminiReply } from "../services/gemini";
import { sendWhatsAppMessage } from "../services/whatsapp";

export async function handleWebhook(req: Request, res: Response) {
    try {
        const { message, sender } = req.body;
        const reply = await getGeminiReply(message);
        await sendWhatsAppMessage(sender, reply);
        res.status(200).json({ status: "ok" });
    } catch (error) {
        console.error("Webhook error: ", error);
        res.status(500).send("Internal Server Error");
    }
}
