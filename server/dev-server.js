const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 1337;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(__dirname + '/../static'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../static/index.html'));
});

app.listen(port, () => console.log(`listening on ${port}`));
