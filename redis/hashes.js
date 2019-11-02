const { redis } = require('./index')

    (async function hashesInAction() {
        await redis.hmset('user:235', 'name', 'Kiran', 'age', 23, 'sex', 'Male', 'Occupation', 'Software Engineer')
        const getHashes = await redis.hgetall('user:235')
        console.log(getHashes)
        await redis.hmset('user:235', 'Address', 'Panchkhal', 'age', 22)
        const getHashes = await redis.hgetall('user:235')
        console.log(getHashes)
    })()

