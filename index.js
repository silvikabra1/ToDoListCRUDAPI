const express = require("express");
const bodyParser = require ("body-parser");
const mongoose = require ("mongoose");
const taskRouter = require ("./Routes/task");

const app = express();

const dbString = process.env.DB_CONNECTION_STRING;

mongoose.connect(dbString, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.log("database connection failed");
    }
   else { console.log("succesfully connected to the database");}

})

app.use(bodyParser.json());
app.get("/" , (req,res)=> {
    res.send("Welcome to Mohamed and Silvi's very cool app");
})

app.use("/api/task", taskRouter);

const PORT = process.env.PORT || 3001
app.listen(PORT, ()=> {
    console.log("listening on port " + PORT + "...")
})
