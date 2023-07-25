import net from 'net';
const s = "The quick brown fox jumped over the lazy dog",
    iter = s[Symbol.iterator](),
    buffer = Buffer.alloc(8),
    main = (function () {
        const inc = i => ++i;
        let i = 0,
            res = iter.next(),
            c = res.value,
            arr = [];
        return function () {
            try {
                if (c < res.value) {
                    c = res.value;
                }
                else if (c > res.value) {
                    arr[i] = res.value;
                    res = iter.next();
                }
                else {
                    buffer[i] = c.charCodeAt(i);
                }
                res = iter.next();
            }
            catch (ex) {
                throw (ex);
            }
        }
    })(),
    hostName = "localhost",
    port = process.env.PORT,
    client = net.createConnection({ host: hostName, port: port }, () => {
        console.log('connected to server!');
    });
client.on('data', (data) => {
    console.log(data.toString());
});
client.on('end', () => {
    console.log('disconnected from server');
});
let i = 0;
try {
    main();
    main();
    main();
    main();
    client.write(buffer);
}
catch (e) {
    throw (e);
}