const express = require('express');
const app = express();
const userRoute = require('./route/userRoute')
const noteRoute = require('./route/noteRoute');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
const cors =require('cors');

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    console.log("server is runnning")
});


app.use("/api/user", userRoute);
app.use("/api/note", noteRoute);



app.use(notFound);
app.use(errorHandler);
module.exports = app;