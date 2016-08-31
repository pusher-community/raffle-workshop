const pusher = require('./pusher-client')

const channel = process.argv[2]
const event = process.argv[3]

console.log(`channel: ${channel}
event: ${event}
`)

const keymap = {'2':'C#4', '3':'D#4', '5':'F#4', '6':'G#4', '7':'A#4', '9':'C#5', '0':'D#5',
 'q':'C4',  'w':'D4',  'e':'E4',  'r':'F4',  't':'G4',  'y':'A4', 'u':'B4',
 'i':'C5', 'o':'D5', 'p':'E5' }

var stdin = process.stdin

stdin.setRawMode( true )

stdin.resume()

stdin.setEncoding( 'utf8' )

// on any data into stdin
stdin.on( 'data', function( key ){
  // ctrl-c ( end of text )
  if ( key === '\u0003' ) {
    process.exit();
  }

  const note = keymap[key.toLowerCase()]
  if(note) {
    console.log(note)

    pusher.trigger(channel, event, note)
  }
});
