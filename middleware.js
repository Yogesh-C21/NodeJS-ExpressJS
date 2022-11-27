const express = require('express');

const app = express();


function middleware1(req, res, next) {
    console.log("Yo!! I am middleware #1");
    req.customVariable = 100;    
    next();
}

app.use(middleware1); // global middleware declaration
                     // eg bodyParser passportJS ,etc.,

function middleware2(req, res, next) {
    console.log("Yo!! I am middleware #2");
    console.log(`Custom Variable previos ${req.customVariable}`);
    req.customVariable = 600;
    next();
}

function mainMiddleware(req, res, next) {
    console.log("Yo!! I am Main middleware ");
    console.log(`Custom Variable after ${req.customVariable}`);
    res.send("<h1>Hello Dosto</h1>");
}

app.get('/', middleware2, mainMiddleware);

///////////local middleware declaration///////


app.listen(3000);