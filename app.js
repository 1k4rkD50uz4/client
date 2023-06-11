import net from 'net';
import utils from '../utils/utils.js';
import { Buffer } from 'buffer';
const BUFFERSIZE = 100;
let writeBuf = Buffer.alloc(BUFFERSIZE),
    readBuf = Buffer.alloc(BUFFERSIZE);
const client = net.createConnection({ host: "192.168.1.2", port: 8000 }, () => {
    console.log('connected to server!');   
});
client.on('data', (data) => {
    readData.call(data);
    console.log(data.toString());
});
client.on('end', () => {
    console.log('disconnected from server');
});
function main() {
    const s = utils.sentence,
        si = s[Symbol.iterator]();
    function doWork() {
        const inc = utils.inc,
            compare = utils.compare;
        let i = 0,
            c = String.fromCharCode(
                s[i]
                    .charCodeAt(i)
                    .toString()[i]
                    .charCodeAt(i)
                    .toString()
                    .split('')
                    .reverse()
                    .join('')
            ),
            sres = si.next(),
            compChar = c.toLowerCase();
        client.write(c.toString());
        while (!sres.done) {
            let res = compare(c, compChar);
            if (res == -1) {
                writeBuf.write(c,i++);
                c = sres.value; 
                sres = si.next();
            }
            else if (res == 1) {
                writeBuf.write(compChar, i++);
                compChar = c;
                c = sres.value; 
            }
        }
    }
    return doWork();
}
function readData() {
    let i = 0,
        buf = this,
        bi = buf[Symbol.iterator](),
        br = bi.next(),
        c = br.value;
    while (!br.done) {
        readBuf[i++] = c;
        br = bi.next();
        c = br.value;
    }
    //bytesRcvd = ;
    //totalBytesRcvd += bytesRcvd;
    //rcvBuffer.copy(data.buffer, 0, 0, bytesRcvd);
}
main();
export default client;