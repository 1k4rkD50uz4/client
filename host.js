import sort from './app.js';
import net from 'net';
let PORT = process.env.PORT || 8000;
const client = net.createConnection({ port: PORT }, () => {
    // 'connect' listener.
    console.log('connected to server!');
    sort();
});
client.on('data', (data) => {
    console.log(data.toString());
    client.write('world!\r\n');
    client.end();
});
client.on('end', () => {
    console.log('disconnected from server');
});

