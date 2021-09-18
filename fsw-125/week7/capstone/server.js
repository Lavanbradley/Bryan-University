const express = require('express')
const app = express();
const dataRouter = require('./data')


const PORT = 9000;

app.use(express.json())

app.use('/data', dataRouter)

app.use((err, req, res, next) => {
  console.log(err);
  console.log(res.statusCode);
  if (res.statusCode !== 404) {
    res.status(500);
  }
  return res.send({ errMsg: err.message });
});


app.listen(PORT, () => {
  console.log(`App started listening on port: ${PORT}`)
})

