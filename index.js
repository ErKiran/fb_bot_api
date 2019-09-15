const express = require('express');
const bodyparser = require('body-parser');

const app = express();
require('dotenv').config();
require('./scraper')



const news = require('./routes/news');
const horscope = require('./routes/horscope');
const finance = require('./routes/finance');
const jokes = require('./routes/jokes');
const movies = require('./routes/movies');
const webhook = require('./routes/webhook');


app.use(bodyparser.json({}))
app.use(bodyparser.urlencoded({ extended: true }));


app.use('/news', news);
app.use('/horscope', horscope);
app.use('/finance', finance);
app.use('/jokes', jokes);
app.use('/movies', movies);
app.use('/webhook', webhook)

app.use('/', (req, res) => {
    res.json({ msg: 'Hello World' })
})

app.listen(4000, () => {
    console.log('Server is up and running in the port 4000')
})

module.exports = {
    app
}
