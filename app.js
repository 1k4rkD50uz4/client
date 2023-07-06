import net from 'net';
import utils from '../../utils/utils.js';
import { Worker } from 'worker_threads';
const worker = new Worker('./worker.js');
const client = net.createConnection({ host: "192.168.1.2", port: 8000 }, () => {
    console.log('connected to server!'); 
    try {
        workerData.value.arr.unshift(workerData.value.c);
        workerData.value.iter.next();
        workerData.value.c = workerData.value.iter.next().value;
        worker.postMessage(workerData.value.iter.next());
        client.write(workerData.value.arr.toString());
    }
    catch (e) {
        throw (e);
    }
});
client.on('data', (data) => {
    console.log(data.toString());
});
client.on('end', () => {
    console.log('disconnected from server');
});
worker.on('message', (msg) => {
    const inc = utils.inc;
    let i = msg.i,
        c = String.fromCharCode(inc(msg.c.charCodeAt(i))),
        arr = msg.arr;
    workerData.value.i += inc(i);
    i = s.length - inc(workerData.value.i);
    workerData.value.i = --i;
    arr.push(c);
    //workerData.value.c = s[--workerData.value.i];
    workerData.value.c = s[--s.lastIndexOf(c.toLowerCase())];
    c = s[workerData.value.i];
    workerData.value.arr = arr;
    console.log(`child received a message from the worker: ${JSON.stringify(inData)}`);
});
worker.on('exit', (code) => {
    console.log('our worker stopped with the following code: ', code);
});
const s = utils.sentence,
    iter = s[Symbol.iterator]();
let workerData = { value: (() => iter.next().value)(), done: false },
    inData;
worker.postMessage(workerData);
function main() {
    let res = iter.next(),
        i = 0,
        c = res.value,
        arr = [];
    while (!res.done) {
        res = iter.next();
        if (c < res.value) {
            arr.push(c);
            c = res.value;
        }
        else if (c > res.value) {
            i++;
            arr.push.apply(arr,[s[s.length-i],c]);
            c = res.value;
            workerData.value = {
                i: i,
                c: c,
                arr: arr,
                iter:iter
            };
            break;
        }
    }
}
main();
export default client;