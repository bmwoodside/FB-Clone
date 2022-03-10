const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
require('dotenv').config();

const app = express();
const port = 8000;

// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({extended:true}));

app.use(cors());

// this sends our app over to the user routes
require("./server/routes/user.routes")(app);
require("./server/routes/userPost.routes")(app);

app.listen(port, ()=>console.log(`server running on port ${port}`));