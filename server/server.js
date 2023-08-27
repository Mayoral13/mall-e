const express = require('express');
const Connection = require('./connection');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const Routes = require('./Routes');

Connection();
// Use the cors middleware with your desired configuration
app.use(cors());
app.use(bodyParser.json());
app.use('/auth',Routes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


const corsOptions = {
  origin: 'http://localhost:5173', // Replace with your React app's URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};

app.use(cors(corsOptions));
