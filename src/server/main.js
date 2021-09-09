const express = require('express');

const app = express();

app.use(express.static('dist'));
app.listen(process.env.PORT || 9090, () => console.log("listening on Port: $process.env.PORT || 8080 } ! "));
