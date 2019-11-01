const axios = require('axios');
const Horoscopes = require('../models/horscopes');
const { getDateInFormat } = require('../utils/calculateDateInFormat')

module.exports = {
    getHoroscope: async function getHoroscope() {
        try {
            const horoscope = await axios.get('http://bg.annapurnapost.com/api/horoscope');
            const dataToPost = {};
            const formattedDate = getDateInFormat(new Date())
            dataToPost.date = formattedDate;
            dataToPost.data = horoscope.data.data;
            const getDataFromDB = await Horoscopes.find({ date: formattedDate });
            if (getDataFromDB.length === 0) {
                console.log('Doe')
                const dataToSend = await new Horoscopes(dataToPost).save()
                return dataToSend
            } else {
                return getDataFromDB;
            }
        }
        catch (e) {
            throw new Error(`Error occured while processing ${e}`)
        }
    }
}
