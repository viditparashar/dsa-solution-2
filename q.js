/* 

const fs = require('fs');

function readFile() {
    return new Promise(function(resolve) {
        console.log("Hello World 2");
        fs.readFile("fs.txt", "utf-8", function(err, data) {
            resolve(data)
        });
        setTimeout(function() {
            console.log("Hello World 3");
        }, 5000);
        console.log("Hello World 5");
    });

}

function onDone(data) {
    console.log(data);
}

readFile().then(onDone)

***************************/




const express = require("express");

const app = express();

app.use(express.json());

var users = [{
    name: 'John',
    kidneys: [{
        healthy: false
    }, {
        healthy: true
    }]
}];

app.get("/", function(req, res) {
    const johnKidneys = users[0].kidneys; // Use johnKidneys instead of kidneys
    const numberofKidneys = johnKidneys.length; // Use johnKidneys to get the length
    let numberofHealthyKidneys = 0;
   
    for (let i = 0; i < numberofKidneys; i++) {
        if (johnKidneys[i].healthy) {
            numberofHealthyKidneys++;
        }
    }
    
    const numberOfUnhealthyKidneys = numberofKidneys - numberofHealthyKidneys;

    res.json({
        numberofKidneys,
        numberofHealthyKidneys,
        numberOfUnhealthyKidneys
    });
});

app.post("/", function(req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    });

    res.json({
        msg: "Kidney status updated successfully."
    });
});



app.put("/", function(req,res) {

    for (let i=0; i<users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({
        msg: "Kidney status updated successfully."})
})

app.delete("/", function(req,res){
    const newKidneys = [];
    for (let i=0; i<users[0].kidneys.length; i++) {
        if (users[0].kidneys[i].healthy) {
            newKidneys.push ({
                healthy: true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.json({msg:"Done"})
})

app.listen(3004, () => {
    console.log("Server is running on port 3002");
});
