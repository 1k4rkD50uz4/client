import { net } from('net');
const client = net.createConnection({ host: "localhost", port: 8000 }, () => {
    // 'connect' listener.
    console.log('connected to server!');
    client.write('world!\r\n');
});
client.on('data', (data) => {
    console.log(data.toString());
    client.end();
});
client.on('end', () => {
    console.log('disconnected from server');
});
export default client;