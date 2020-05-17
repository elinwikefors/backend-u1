const express = require('express');
const routes = require('./routes');
const app = express();

const db = require('./models') 
const cors = require('cors')

app.use(cors())

const port = process.env.PORT || 9000;

app.get('/', (req, res) => {
  res.send('Hello iam 9000')
});

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
  req.models = db.models
  next()
})

app.use('/api', routes);
db.connectDb().then(() => {
  const listener = app.listen(port, () => {
    console.info(`Server is listening on port ${listener.address().port}.`);
  })
});