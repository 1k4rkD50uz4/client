import net from 'net';
import main from './main.js';
const address = "localhost",
    PORT = 8000,
    client = net.createConnection({ host: address, port: PORT }, () => {
        client.write(c);
        client.on('data', (data) => {
            let j = data;
            
        });
        client.on('end', () => {
            console.log('disconnected from server');
        });
    });
let c = main();