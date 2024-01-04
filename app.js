const env = require("dotenv");
env.config({ path: "config.env" });

const express = require("express");
const app = express();
const router = require("./routes/router");
const cors = require("cors");
const port = process.env.PORT;



// middle ware
app.use(express.json());
app.use(cors());
app.use(router)


app.listen(port,()=>{
    console.log(`server start at port no :${port}`)
})