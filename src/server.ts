import express from "express";
import { handleWebhook } from "./handlers/webhookHandler";
import { ENV } from "./config/env";

const app = express();
app.use(express.json());

app.post("/webhook", handleWebhook);

app.listen(ENV.PORT, () => {
    console.log(`Server is running on port ${ENV.PORT}`);
});
