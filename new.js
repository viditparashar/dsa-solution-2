const express = require("express");

const app = express();

function UserMiddleWare(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;

    if (username !== "harkirat" || password !== "pass") {
        res.status(403).json({
            msg: "User doesn't exist",
        });
    }
    return;
    
    // Call next only if the user is authorized
    next();
}

function kidneyMiddleWare(req, res, next) {
    const kidneyID = req.query.kidneyID;
    if (kidneyID != 1 && kidneyID != 2) {
        return res.json({
            msg: "There is something wrong with your kidneys",
        });
    }

    // Call next if kidneys are fine
    res.json({
        msg: "Your kidneys are fine"
    });
    next();
}

app.get("/health-checkup", UserMiddleWare, kidneyMiddleWare);

app.listen(3010, () => {
    console.log("Server is running on port 3008");
});
