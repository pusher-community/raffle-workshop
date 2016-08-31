const pusher = require('./pusher-client')

const channel = process.argv[2]
const event = process.argv[3]
const data = process.argv[4]

try {
  const json = JSON.parse(data)
} catch (e) {
  console.error(`unable to parse: ${data}`)
  process.exit()
}

console.log(`channel: ${channel}
event: ${event}
data (json): ${JSON.stringify(json, null,2)}
`)

pusher.trigger(channel, event, json, (err) => {
  if(err) {
    console.log(`❌  ${err}`)
  } else {
    console.log(`👍`)
  }
})
