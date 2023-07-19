const path = require('path');

const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use((req, res) => {
  console.log('catch-all hit');
  res.sendStatus(404);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  // define Default error object
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: {err: 'An error occurred'},
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  res.status(errorObj.status).send(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
