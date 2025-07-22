const express = require("express");
const { RestClientV5 } = require('bybit-api');
const app = express();
app.use(express.json());

const apiKey = process.env.api;
const apiSecret = process.env.secret;

const client = new RestClientV5({
    key: apiKey,
    secret: apiSecret,
    testnet: false, // testnet için true yapabilirsin
});

app.post("/webhook", async (req, res) => {
    const data = req.body;
    console.log("Webhook verisi:", data);

    try {
        const response = await client.submitOrder({
            category: "linear",
            symbol: data.symbol,
            side: data.side,
            orderType: data.order_type,
            qty: data.qty.toString(),
            timeInForce: "GoodTillCancel",
            leverage: data.leverage,
        });

        console.log("Bybit cevabı:", response);
        res.status(200).send("Order gönderildi");
    } catch (err) {
        console.error("Bybit hatası:", err);
        res.status(500).send("Order gönderilemedi");
    }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Bot çalışıyor: http://localhost:${PORT}/webhook`);
});
