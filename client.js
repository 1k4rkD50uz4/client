import net from 'net';
import StringOperations from './stringOperations.js';
let PORT = process.env.PORT || 8000,
    stringOperations = StringOperations(),
    outData;
var client = net.connect(PORT, function () { //'connect' listener
    console.log('client connected');
    outData=stringOperations();
    client.write(outData);
});
client.on('data', function (data) {
    let inData = data.toString();
    console.log(inData);
    outData=stringOperations(inData);
    client.end();
});
client.on('end', function () {
    console.log('client disconnected');
});