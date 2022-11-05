import net from 'net';
const s = "The quick brown fox jumped over the lazy dog",
    timer = ms => new Promise(res => setTimeout(res, ms)),   
    compare = (a, b) => a < b ? true : a > b ? false : undefined,
    inc = i => ++i,
    client = net.createConnection(8000, () => {
        console.log('connected to server!');
        client.write(outData.value);
    });
client.on('data', (data) => {
    inData.value = data.toString();
    console.log(`data from server: ${inData.value}`);
});
client.on('end', () => {
    console.log('disconnected from server');
});
let inData = { value: null, done: false },
    outData = { value: null, done: false };
async function main() {
    const iter = s[Symbol.iterator]();
    let i = 0,
        res = iter.next(),
        c,
        arr = [];
    outData.value = res.value;
    res = iter.next();
    await timer(3000);
    while (!res.done) { 
        if (inData.value) {
            let result = compare(inData.value, res.value);
            console.log(`compare inData: ${inData.value} with value: ${res.value}\nresult: ${result}`);
            if (result) {
                arr.push(inData.value, res.value);
                res = iter.next();
                inData.value = null;
                outData.value = res.value;                
                console.log(`arr: ${arr.toString()}\noutData: ${outData.value}\nvalue: ${res.value}`);
            }
            else {

            }            
        }
        else {
            console.log(`client sleeping.`);
            await timer(3000);
            console.log(`client woke up.`);
        }
        res = iter.next();
        console.log(`value: ${res.value}`);
    }
}
main();