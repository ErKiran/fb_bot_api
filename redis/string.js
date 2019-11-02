const { redis } = require('./index');

/*(async function workAsync() {
    await redis.set('name', 'Raj')
    const address = await redis.get('address')
    const incrementedAddress = await redis.incr('address')
    const incrementedBy = await redis.incrby('address', 200)
    redis.mset('Job', 'Web Developer', 'Company', 'E-Signature', 'Salary', 40000)
    const getMultiple = await redis.mget('Job', 'Company', 'Salary');
    console.log(getMultiple)
    console.log('Address', address)
    console.log('IncrementedAddress', incrementedAddress)
    console.log('incrementedBy 200', incrementedBy)
})()*/

(async function hashesInAction() {
    await redis.hmset('user:235', 'name', 'Kiran', 'age', 23, 'sex', 'Male', 'Occupation', 'Software Engineer')
    const getHashes = await redis.hgetall('user:235')
    console.log(getHashes)
    await redis.hmset('user:235', 'Address', 'Panchkhal', 'age', 22)
    const getHashes1 = await redis.hgetall('user:235')
    console.log(getHashes1)
    const dec = await redis.hincrby('user:235', 'age', 2)
    console.log(dec)
})()

