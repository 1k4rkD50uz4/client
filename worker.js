import utils from '../../utils/utils.js';
import { parentPort } from 'worker_threads';
parentPort.on('message', (msg) => {
    inData.value = msg;
    console.log(`worker received a message from the child: ${JSON.stringify(msg)}`);
});
const s = utils.sentence,
    iter = s[Symbol.iterator]();
let res = iter.next(),
    i = 0,
    c = res.value,
    arr = [String.fromCharCode(c.charCodeAt(i)
        .toString()[i]
        .charCodeAt(i)
        .toString()
        .split('')
        .reverse()
        .join(''))],
    inData = { value: undefined, done: false };
parentPort.postMessage({
    i: i,
    c: res.value,
    arr: arr
});
function main() {
    while (!res.done) {
        res = iter.next();
        console.log(`worker data: ${res.value}`);
        if (inData.value) {
            break;
        }
    }
}
main();
parentPort.postMessage({
    c: res.value
});