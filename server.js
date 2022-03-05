const express = require("express");
const app = express();
const port = 8000;

const mongoose = require('mongoose');

// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({extended:true}));

const cors = require("cors");
app.use(cors());

// this sends our app over to the user routes
require("./server/routes/user.routes")(app);
require("./server/routes/userPost.routes")(app);

app.listen(port, ()=>console.log(`server running on port ${port}`));