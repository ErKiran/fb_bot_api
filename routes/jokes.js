const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/cartoon', async (req, res) => {
    const all = await axios.get('http://bg.annapurnapost.com/api/illustration/%7Bid%7D/detail');
    let cartoons = [];
    all.data.relatedData.map(i => {
        cartoons.push({
            id: i.id,
            name: i.name,
            author: i.createdBy,
            imageUrl: `http://bg.annapurnapost.com${i.imageUrl}`,
            date: i.createdOn
        })
    })
    res.json(cartoons)
})

router.get('/all_cartoon', async (req, res) => {
    const all = await axios.get('http://bg.annapurnapost.com/api/illustration/%7Bid%7D/detail?page=3&per_page=115');
    let cartoons = [];
    all.data.relatedImage.map(i => {
        cartoons.push({
            images: `http://bg.annapurnapost.com${i}`
        })
    })
    let viewed_cartoons = [];
    const random_cartoons = Math.floor(Math.random() * (cartoons.length - 0));

    if (viewed_cartoons.indexOf(random_cartoons) == -1) {
        viewed_cartoons.push(random_cartoons);
        res.json(cartoons[random_cartoons])
        console.log(viewed_cartoons)
    } else {
        console.log('All caught up')
    }
})
module.exports = router