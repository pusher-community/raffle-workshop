const pusher = require('./pusher-client')

const channel = process.argv[2]
const event = process.argv[3]


function pickUser(channel){
  return new Promise((resolve, reject) => {
    pusher.get(
      { path: `/channels/${channel}/users` },
      (error, request, response) => {
      if (response.statusCode === 200) {
        const result = JSON.parse(response.body)
        const users = result.users
        return resolve(users[Math.floor(Math.random()*users.length)])
      }

      reject(error || response.statusCode)
    })
  })
}


pickUser(channel)
  .then((user) => {

    console.log(`channel: ${channel}
    event: ${event},
    user: ${user.id}
    `)

    pusher.trigger(channel, event, user.id, (err) => {
      if(err) {
        console.log(`❌  ${err}`)
      } else {
        console.log(`👍`)
      }
    })

  })
  .catch(e => console.error(e))
