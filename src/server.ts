import express, { response } from "express";

const app = express();

app.get("/healthCheck", (request, response) => {
    return response.json({
        message: "Everything is fine 🔥",
    })
})

app.listen(3000, () => console.log("Server is running"));