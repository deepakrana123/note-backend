// const app = require('./server.js');
const dotenv = require('dotenv');
const express = require('express');
const app = express();
const userRoute = require('./route/userRoute')
const noteRoute = require('./route/noteRoute');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./connectDatabase/connectDatabase.js');
const cors = require('cors');

dotenv.config()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/yes", (req, res) => {
    console.log("server is runnning")
});


app.use("/api/user", userRoute);
app.use("/api/note", noteRoute);



app.use(notFound);
app.use(errorHandler);


connectDB();

app.listen(process.env.PORT,()=>{
    console.log(`server is running on localhost://${process.env.PORT}`)
})