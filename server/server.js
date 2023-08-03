const path = require('path');

const express = require('express');

const harmodevsRoutes = require('./routes/harmodevsRoutes');
const users = require('./routes/userRoutes');
const coolStuffRoutes = require('./routes/coolRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/harmodevs', harmodevsRoutes, (req, res, next) => {
  res.status(200).send({default: object});
});
app.use('/harmodivs', harmodevsRoutes);
// app.use('/harmodevs', harmodevsRoutes);
app.use('/harmodevious', harmodevsRoutes);
app.use('/users', users);
app.use('/cool_stuff', coolStuffRoutes);
app.use('/harmodevs/name', () => console.log('middleware will be here'));

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
