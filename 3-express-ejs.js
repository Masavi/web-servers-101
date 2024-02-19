// INITIAL SETUP
const express = require('express')
const morgan = require('morgan')
const app = express()
const PORT = 3000

// MIDDLEWARES
/* Extra behaviour that applies to EVERY REQUEST */
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'))
app.set('view engine', 'ejs');

// ROUTES / ENDPOINTS
app.get('/', (req, res) => {
  res.render('helloworld')
})

app.post('/signup', (req, res) => {
  // I need to get an email
  // I need to get a password
  console.log("This is the client's data:", req.body);

  const templateVars = { email: req.body.email, password: req.body.password }
  res.render('signup', templateVars);
})

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`)
})