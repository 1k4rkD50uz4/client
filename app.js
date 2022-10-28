import net from 'net';
const s = "The quick brown fox jumped over the lazy dog",
    i = 0,
    inData = { value: null, done: false },
    outData = { value: null, done: false },
    timer = ms => new Promise(res => setTimeout(res, ms)),
    inc = i => ++i,
    client = net.createConnection(
        8000,
        '169.254.247.167',
        () => {
        console.log('connected to server!'); 
    });
    client.on('data', (data) => {
        inData.value = data.toString();
        console.log(`data from server: ${inData.value}`);
    });
client.on('end', () => {
    console.log('disconnected from server');
});
let _data,
    j = s.length - inc(i),
    c = s[j],
    enumtor = getEnumerator(),
    res = enumtor(),    
    arr=[];
function getEnumerator() {
    let iter = s[Symbol.iterator](),
        res = { value: undefined, done: false };
    function enumerator() {
        while (!res.done) {
            res = iter.next();
            return res;
        }
    }
    return enumerator;
}
function compare(a, b) {
    if (a < b) {
        return true;
    }
    else if (a > b) {
        return false;
    }
    else {
        return undefined;
    }
}
function init() {
    outData.value = res.value;
    res = enumtor();
    arr.splice(i, i, s[j--], res.value);
    res = enumtor();
    c = s[j--];
    arr.splice(i, i, s[j], res.value);
}

async function main() {
    let _res;
    while (!res.done) {
        // Wait for data from the server
        await timer(3000);
        _res = compare(res.value, inData.value);
        if (_res) {
            if (inc(number) == next) {
                max = s[j--];
                min = s[j];
            }
            else {

            }
        }
        else if (_res == false) {

        }
        //if (inc(number) == next) {
        //    max = s[j--];
        //    min = s[j];
        //}
        //else {

        //}
        res = enumtor();
    }
}
main();