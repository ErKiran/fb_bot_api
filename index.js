const express = require('express');
const app = express();

const news = require('./routes/news');
const horscope = require('./routes/horscope');
const finance = require('./routes/finance');
const jokes = require('./routes/jokes');
const movies = require('./routes/movies');

app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.use('/news', news);
app.use('/horscope', horscope);
app.use('/finance', finance);
app.use('/jokes', jokes);
app.use('/movies', movies);


app.use('/', (req, res) => {
    res.json({ msg: 'Hello World' })
})

app.listen(4000, () => {
    console.log('Server is up and running in the port 4000')
})

module.exports = app