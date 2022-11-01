import net from 'net';
const s = "The quick brown fox jumped over the lazy dog",
    inData = { value: null, done: false },
    outData = { value: null, done: false },
    timer = ms => new Promise(res => setTimeout(res, ms)),
    Char = {
        _i: 0,
        _fname: 'toLowerCase',
        get i() {
            return this._i;
        },
        set i(ind) {
            this._i = ind;
        },
        get fname() {
            return this.cb;
        },
        set fname(name) {
            this._fname = name;
        },
        inc = i => ++i
    },    
    arr = [],    
    atoi = (val = s[i], fname = 'charCodeAt', count = 0) => {
        val = val[fname](i);
        if (fname != 'charCodeAt') {
            return atoi(val, undefined, count);
        }
        else {
            if (count == 1) {
                return atoi(val, null, count);
            }
            else {
                res = inc(res);
            }

        }
        //if (pre == '0x') {
        //    res = pre + res;
        //}
        //else {
        //    res = +res;
        //}
    },
    client = net.createConnection(
        8000,
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
let i = 0,
    c = s[i];
async function main(val = c, fname = 'charCodeAt', count = 0) {
    outData.value = val[fname](i);
    if (val != c) {

    }
    return main(val,);
    await timer(3000);
}
main.call(undefined, 'toLowerCase');