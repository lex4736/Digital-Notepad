// This is where i am calling the dependencies 
const express = require('express');
const PORT = process.env.PORT || 5000;


// Here i am setting up the express application 
const app = express();













// Here i set up the listening port and heroku deployement 
app.listen(PORT, function () {
    console.log(`Server listening at http://localhost:${port}`);
});