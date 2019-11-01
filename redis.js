const redis = require('redis');

let client;
try {
    client = redis.createClient(process.env.REDIS_PORT)
} catch (e) {
    throw new Error(`Error while connecting to redis Server ${e}`)
}

client.on('connect', () => {
    console.log('Redis Server is sucessfully connected')
})

module.exports = {
    client
}    