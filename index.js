const express = require("express");
const app = express();

app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.send("Shukriya 👍 Server successfully chal raha hai");
});

// Webhook verify
app.get("/webhook", (req, res) => {
    const VERIFY_TOKEN = "mytoken123";

    const mode = req.query["hub.mode"];
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    if (mode && token === VERIFY_TOKEN) {
        res.status(200).send(challenge);
    } else {
        res.sendStatus(403);
    }
});

// Receive messages
app.post("/webhook", (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
});

// Server start
app.listen(3000, () => {
    console.log("Server running on port 3000");
});