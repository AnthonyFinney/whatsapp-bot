import axios from "axios";
import { ENV } from "../config/env";

export async function sendWhatsAppMessage(to: string, message: string) {
    await axios.post(
        `${ENV.WASENDER_BASE_URL}/send-message`,
        { to, text: message },
        {
            headers: {
                Authorization: `Bearer ${ENV.WASENDER_API_KEY}`,
                "Content-Type": "application/json",
            },
        }
    );
}
