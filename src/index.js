const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require('path');
const compression = require('compression');
const helmet = require('helmet');

require('dotenv').config({ path: path.join(__dirname, '../.env') });

app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
app.use(compression());

// Routes
app.use('/api/portfolio', require("./routes/portfolio"));
app.use('/api/sendEmail', require("./routes/send-email"));

app.use(function(req, res){
  res.status(404);
  res.json({error : "Error"});
});

app.listen(3001);
