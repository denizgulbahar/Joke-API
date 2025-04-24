import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
// Using this to allow people who want to delete all jokes.
const masterKey = "4VGP2DN-6EWM4SJ-N6FGRHV-Z3PR3TT";

// Middleware
// Parsing of complex urlencoded (form, query string parameters, etc.) data
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(port, () => {
    console.log(`Successfully started server on port ${port}.`);
  });