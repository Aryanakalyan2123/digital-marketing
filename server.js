const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// Backend test API
app.get("/api/test", (req, res) => {
    res.json({
        message: "Backend is working!"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
    console.log("Website running at http://localhost:3000");
});