const Redis = require('ioredis');

let redis;
try {
    redis = new Redis({})
} catch (e) {
    throw new Error(`Error while connecting to redis Server ${e}`)
}



redis.on('connect', () => {
    console.log('Redis Server is sucessfully connected')
})


module.exports = {
    redis
}    