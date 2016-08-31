const pusher = require('./pusher-client')

const channel = process.argv[2]
const event = process.argv[3]
const data = process.argv[4]

console.log(`channel: ${channel}
event: ${event}
data: ${data}
`)

pusher.trigger(channel, event, data, (err) => {
  if(err) {
    console.log(`❌  ${err}`)
  } else {
    console.log(`👍`)
  }
})
