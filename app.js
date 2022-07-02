import net from 'net';
//import StringUtils from '../lib/stringUtils.js';
import encodeNumber from '../lib/number.js';
import { Buffer } from 'buffer';
//const stringUtils = StringUtils(),
//    buffer;
//const client = net.createConnection({ port: stringUtils.port }, () => {
//        console.log('connected to server!');
//    });
//    client.on('data', (data) => {
//        console.log(`char from server: ${data.toString()}`);
//        client.write(i);
//        client.end();
//    });
//    client.on('end', () => {
//        console.log('disconnected from server');
//});
let i = parseInt(process.argv[2]),
    c = process.argv[3],
    res;
function main(args) {
    const props = {
        value: 0
    },
    methods = {
        inc: i => ++i,
        cb: inc,
        args=[cb(i)],
        itoa = () => {
            let i = props.value,
                exp = args.shift(),
                cb = !cb ? parseInt : cb,
                options = !options ? [cb(i)] : options.concat([options[i]]),
                res;
            for (let arg of args) {
                exp += arg;
            }
            res = cb(exp, options[i]);
            return res;
            // 10
            //64+1=A,32, 8 = 26
        }
    },
    Exp = Object.create(val, methods);
    encodeNumber(Exp.itoa());
    let c = '0x0',
        exp=Exp(cb())
}
main(process.argv);
const buffer = encodeString(c);
res = buffer[5];
process.stdout.write(res.toString());