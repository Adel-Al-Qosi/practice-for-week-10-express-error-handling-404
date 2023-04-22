const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('GET / This is the root URL');
});

app.get('*', (req, res, next) => {
  const error = new Error("Sorry, the requested resource couldn't be found")
  error.status = 404
  next(error)
})

app.use((err, req, res, next) => {
  console.error(err)
  res.status(err.status || 500).json({
    message: err.message,
    statusCode: err.status || 500
  })
})





const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));