import net from 'net';
const s = "The quick brown fox jumped over the lazy dog";
let iter = s[Symbol.iterator](),
    res = iter.next(),
    value = res.value,
    remotePort = 8000,
    outData = { value: null };
const client = net.createConnection({ port: remotePort }, () => {
        console.log('connected to server!');
    });
    client.on('data', (data) => {
        console.log(`char from server: ${data.toString()}`);
        setNextChar();
        client.write(outData.value);
        client.end();
    });
    client.on('end', () => {
        console.log('disconnected from server');
});
function setNextChar() {
    res = iter.next();
    if (compare(res.value, value)) {
        outData.value = res.value;
    }
}
function compare(a, b) {
    if (a < b) {
        return -1;
    }
    else if (a > b) {
        return 1;
    }
    else {
        return 0;
    }
}