import net from 'net';
const compare = (a, b) => a < b ? true : a > b ? false : undefined,
    address = "localhost",
    PORT = 8000,
    s = "The quick brown fox jumped over the lazy dog",
    iter = s[Symbol.iterator](),
    client = net.createConnection({ host: address, port: PORT }, () => {
        client.write(res.value);
        client.on('data', (data) => {
            while (!res.done) {
                inData.value = data.toString();
                let result = compare(min, inData.value);
                if (result) {

                }
                else {
                    if (result == undefined) {
                        outData.value = s[s.length - 1];
                        res = iter.next();
                        arr.push.call(arr, outData.value, res.value);
                    }
                    else {

                    }
                }
                c.write(outData.value.toString());
                res = iter.next();
            }
        });
        client.on('end', () => {
            console.log('disconnected from server');
        });
    });
let res = iter.next(),
    arr = [],
    outData = { value: null, done: false },
    inData = { value: null, done: false };
