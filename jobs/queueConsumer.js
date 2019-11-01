const kue = require('kue')
const queue = kue.createQueue()

exports.quefun = (queuename)=>{
    queue.process(queuename, (job, done) => {
  console.log('OOOOE');
  console.log('JOB',job.data)
  done() // This deletes the job from the queue
})
}