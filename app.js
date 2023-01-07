import net from 'net';
import BinaryAdder from './binaryAdder.js';
//const address = "localhost",
//    PORT = 8000,
//    client = net.createConnection({ host: address, port: PORT }, () => {
//        client.write(res);
//        client.on('data', (data) => {
//            let j = data;
            
//        });
//        client.on('end', () => {
//            console.log('disconnected from server');
//        });
//    });
let adder = BinaryAdder();
adder();