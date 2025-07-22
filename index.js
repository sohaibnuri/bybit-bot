const express = require("express");
const app = express();
app.use(express.json());

app.post("/webhook", (req, res) => {
    console.log("Webhook verisi:", req.body);
    // Buraya Bybit API kodunu ekleyeceğiz
    res.status(200).send("OK");
});

app.listen(3000, () => {
    console.log("Bot çalışıyor: http://localhost:3000/webhook");
});
