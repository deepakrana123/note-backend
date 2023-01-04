const app = require('./server.js');
const dotenv = require('dotenv');
const connectDB = require('./connectDatabase/connectDatabase.js');


dotenv.config()
connectDB();

app.listen(process.env.PORT,()=>{
    console.log(`server is running on localhost://${process.env.PORT}`)
})