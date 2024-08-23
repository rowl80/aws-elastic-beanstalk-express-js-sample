const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('You are the heart and soul of this team.'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
