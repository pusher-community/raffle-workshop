const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const pusher = require('./pusher-client')
const app = express()

app.get('/', (req, res) => res.send('raffle-workshop'))

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/pusher/auth', (req, res) => {
  const socket_id     = req.body.socket_id
  const channel_name  = req.body.channel_name
  if(socket_id && channel_name) {
    res.send(pusher.authenticate(
      socket_id,
      channel_name,
      {user_id: socket_id, user_info: {}}
    ))
  } else {
    res.sendStatus(401)
  }
})

app.listen(process.env.PORT || 3000)
