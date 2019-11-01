const express = require('express');

const app = express();
require('dotenv').config();
require('./mongo')
const {quefun} =require('./jobs/queueConsumer')
quefun('Queue1')



const news = require('./routes/news');
const horscope = require('./routes/horscope');
const finance = require('./routes/finance');
const jokes = require('./routes/jokes');
const movies = require('./routes/movies');
const webhook = require('./routes/webhook');
const queue = require('./routes/queue')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/news', news);
app.use('/horoscopes', horscope);
app.use('/finance', finance);
app.use('/jokes', jokes);
app.use('/movies', movies);
app.use('/webhook', webhook)
app.use('/image',require('./routes/saveImageDisk'))
app.use('/queue',queue)

app.use('/', (req, res) => {
    res.json({ msg: 'Hello World' })
})

app.listen(4000, () => {
    console.log('Server is up and running in the port 4000')
})

module.exports = {
    app
}
