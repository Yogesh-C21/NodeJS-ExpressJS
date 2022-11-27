const express = require('express');

const app = express();


function middleware1(req, res, next) {
    console.log("Yo!! I am middleware #1");

    const err = new Error("Yo I am error"); // creating an error for the sake of understanding that if there was en error how would it behave.
    next(err);
}

function errorHandler(err, req, res, next) {
    if(err) {
        console.log("This is an error");
    }
}

app.use(middleware1); // global middleware declaration
                     // eg bodyParser passportJS ,etc.,

function middleware2(req, res, next) {
    console.log("Yo!! I am middleware #2");
    next();
}



function mainMiddleware(req, res, next) {
    console.log("Yo!! I am Main middleware ");
    res.send("<h1>Hello Dosto</h1>");
}

app.get('/', middleware2, mainMiddleware);

app.use(errorHandler);     // we always place this at last since through entire middlewares calling it should redirect to last where error is handled and do not affect the functionining of other middlewares.

///////////local middleware declaration///////


app.listen(3000);