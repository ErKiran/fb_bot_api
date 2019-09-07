const express = require('express');
const app = express();

const news = require('./routes/news');

app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.use('/news', news)

app.use('/', (req, res) => {
    res.json({ msg: 'Hello World' })
})

app.listen(4000, () => {
    console.log('Server is up and running in the port 4000')
})

module.exports = app