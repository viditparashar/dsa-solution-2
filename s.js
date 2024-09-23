const fs = require('fs');

function readFile(cb) {
  fs.readFile("fs.txt", "utf-8", function(err, data) {
    cb(data);
  });
}

function onDone(data) {
  console.log(data);
}

readFile(onDone);