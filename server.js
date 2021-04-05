// This is where i am requiring the dependencies and paths 
const express = require('express');
const PORT = process.env.PORT || 5000;

// Here i am initializing the express framework  
const app = express();

//Here i am accessing the public files 
app.use(express.static(__dirname + '/public'));
app.use(express.static('./'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Here i am requiring the Routes.js files in order to communicate when to generate api routes and html files
require("./apiRoutes")(app);
require("./htmlRoutes")(app);


// Here i am starting the server and triggering a callback when server is listening 
app.listen(PORT, () => {
    console.log(`Server listening at: http://localhost:${PORT}`);
  });