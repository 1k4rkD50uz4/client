const s = "The quick brown fox jumped over the lazy dog",
    i = 0,
    inc = i => ++i,    
    itoa = (i, farr) => {
        let [i, farr] = [...arguments];
        String.fromCharCode(+`0x${i}`)
    },
    getCode = (c=s[i]) => c.charCodeAt(i),
    atoi = arr => {
        let c = getCode;
        for (let f of arr) {            
            c = f.(c,i);
        }
        return c;
    };
function sort() {
    let j = s.length - inc(i),
        iter = s[Symbol.iterator](),
        res = iter.next(),
        c = res.value,
        _c = atoi([]);
        arr = (() => {            
            let _arr = [s[('' + c.charCodeAt(i))[inc(i)]]];
            c = String.fromCharCode(+`0x${atoi('' + c.charCodeAt(i))}`);
            _arr.push.apply(_arr, [c.toLowerCase(), res.value.toLowerCase()]);
            c = String.fromCharCode(inc(res.value.toLowerCase().charCodeAt(i)));
            _arr.push(c);
            c = s[j];
            res = iter.next();
            return _arr;
        })();
    while (!res.done) {
        let _res = compare(c, res.value);
        if (_res) {
            if (inc(c.charCodeAt(i)) == res.value.charCodeAt(i)) {
                arr.unshift.apply(arr, [c, res.value]);
                j--;
                c = s[i];
            }
        }
        else {
            
        }
        res = iter.next();

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
    function getCode () {
        let c = s[i],
            arr = this.arr;
        for (let f of arr) {
            c = f(c);
        }
    }
}
sort();
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
//main();