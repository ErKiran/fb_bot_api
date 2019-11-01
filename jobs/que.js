const kue = require('kue')
const queue = kue.createQueue()
exports.save = (queue_name, jobData) => {
    const job = queue.create(queue_name , jobData).save(err => {
        if (!err) console.log(job.id)
      })
}
