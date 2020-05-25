const fs = require('fs')
const { exec } = require('child_process');
const net = require('net');

let imageCounter = 1;

const getCoords = (all) => {
  fs.writeFileSync(__dirname + `/data/image${imageCounter}.txt`, all) // save data to file
  imageCounter++;

  let answer = []
  let arr = all.split('\n')
           .filter(el => el.length > 200)      // remove lines with instructions
           .map(el => el.split(',').map(Number))   // turn to 2D array with Ints

  let lastX = 0
  let lastY = 0
  for (let y = 0; y < 128; y++) {
    for ( let x = 0; x < 128; x++) {
      if (arr[y][x] === 255 && Math.abs(lastX - x) > 3 && Math.abs(lastY - y)) {
          answer.push(`${y},${x}`)
          lastX = x;
          lastY = y;
      }
    }
  }
  return answer.join('\n') + '\n\n'
}


const client = new net.Socket();
client.connect(5013, 'stars.satellitesabove.me', function() {
	console.log('Connected');
});

let all = '';
client.on('data', function(data) {
  all += data;
  if (data.includes('Ticket please:'))
    client.write('ticket{oscar14129india:GJCIflp1qu8YRqNCgcW4jBvRylcPAQbtmFsM1JtWEpjaF8ANYIlFC4zyIcRn2SCfSw}\n')

  if (data.includes('Finish')) {
    let coords = getCoords(all);
    all = '';
    client.write(coords);
  }

  if (data.includes('flag')) {
    console.log('' + data);
    fs.writeFileSync('flag.txt', data)
  }
});

client.on('close', function() {
	console.log('Connection closed');
});
