# Raffle Workshop

This is an introduction to some of the frontend features of Pusher.

We’ll be building a raffle, and seeing some of the features of pusher along the way.

These are all static web page examples, just open them in a browser to run them (no need to have a development server).

Key: 🚀 - demo time

## Sending messages out – _broadcast.html_

In this section we send messages out from our backend server to some static pages.

🚀 `test_channel my_event 'hello'`

### Hello World 

Update the

* subscribe to `workshop` channel
* bind to `name` event
* update element `#hello` to be `Hello, #{name}!`

🚀 `workshop name everyone`

### Change the page background

* bind to `background`
* set background colour 

🚀 `workshop name aquamarine`

### Make some noise

* include [Tone.js](https://github.com/Tonejs/Tone.js):

```html
<script src="https://tonejs.github.io/CDN/latest/Tone.min.js"></script>
<script type="text/javascript">
  var synth = new Tone.Synth().toMaster()

  synth.triggerAttackRelease('C4', '8n')
</script>
```

* bind to `note` event
* call `synth.triggerAttackRelease` with data & `'8n'`

🚀 `…keyboard.js workshop note`

## Seeing who is connected - presence.html

For the raffle, we’ll need to see who is connected so that we can pick a winner.  For this we need to use authenticated channels.

### Seeing members

* discuss authEndpoint & presence-workshop
* inspect `channel.members` in console
* update `render()` to display count of users in `#hello`

### Picking a winner

* bind callback to `winner`
* if set hasWon to data==myID
    * set background to `hasWon ? ’green’ : ’blue’`
    * include tone.js (as above) & play `…ease(hasWon?’G5’:’G2’, ‘6n’)`

🚀 `…/pick.js presence-workshop winner`


## (bonus) client events



