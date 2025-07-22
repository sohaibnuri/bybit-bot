const express = require("express");
const app = express();
app.use(express.json());

app.post("/webhook", (req, res) => {
    console.log("Webhook verisi:", req.body);
    // Buraya Bybit API kodunu ekleyeceğiz
    res.status(200).send("OK");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Bot çalışıyor: http://localhost:${PORT}/webhook`);
});
