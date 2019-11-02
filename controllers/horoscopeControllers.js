const axios = require('axios');
const Horoscopes = require('../models/horscopes');
const { getDateInFormat } = require('../utils/calculateDateInFormat');
const { redis } = require('../redis');

module.exports = {
    getHoroscope: async function getHoroscope() {
        try {
            const checkifHashKeyMatch = await redis.hmget('horoscopes', 'date');
            if (checkifHashKeyMatch[0] !== getDateInFormat(new Date())) {
                const horoscope = await axios.get('http://bg.annapurnapost.com/api/horoscope');
                const dataToPost = {};
                const formattedDate = getDateInFormat(new Date())
                redis.hmset(
                    'horoscopes',
                    'date', formattedDate,
                    'aries', horoscope.data.data.aries,
                    'taurus', horoscope.data.data.taurus,
                    'gemini', horoscope.data.data.gemini,
                    'cancer', horoscope.data.data.cancer,
                    'leo', horoscope.data.data.leo,
                    'virgo', horoscope.data.data.virgo,
                    'libra', horoscope.data.data.libra,
                    'scorpio', horoscope.data.data.scorpio,
                    'sagittarius', horoscope.data.data.sagittarius,
                    'capricorn', horoscope.data.data.capricorn,
                    'aquarius', horoscope.data.data.aquarius,
                    'pisces', horoscope.data.data.pisces
                );
                dataToPost.date = formattedDate;
                dataToPost.data = horoscope.data.data;
                const getDataFromDB = await Horoscopes.find({ date: formattedDate });
                if (getDataFromDB.length === 0) {
                    const dataToSend = await new Horoscopes(dataToPost).save()
                    return dataToSend
                } else {
                    return getDataFromDB;
                }
            }
            const data = await redis.hgetall('horoscopes');
            return data
        }
        catch (e) {
            throw new Error(`Error occured while processing ${e}`)
        }
    }
}
