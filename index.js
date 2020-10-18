const express = require("express");
const bodyParser = require ("body-parser");
const mongoose = require ("mongoose");
const taskRouter = require ("./Routes/task");

const app = express();

var dbString = process.env.DB_CONNECTION_STRING;
dbString = "mongodb+srv://mohammed:mohammedVX7@cluster0.bc4kp.mongodb.net/tasks?retryWrites=true&w=majority"

mongoose.connect(dbString, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.log("database connection failed");
    }
   else { console.log("succesfully connected to the database");}

})

app.use(bodyParser.json());
app.get("/" , (req,res)=> {
    res.send("Welcome to H4I onboarding task");
})

app.use("/api/task", taskRouter);

const PORT = process.env.PORT || 3001
app.listen(PORT, ()=> {
    console.log("listening on port " + PORT + "...")
})
