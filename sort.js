const s = "The quick brown fox jumped over the lazy dog",
    i = 0,
    inc = i => ++i,    
    itoa = () => {
        let [_i, _farr] = [...arguments];
        String.fromCharCode(+`0x${_i}`)
    },
    arr=[],
    atoi = (val = s[i], fname = 'charCodeAt', count=0) => {
        val = val[fname](i);
        if (fname != 'charCodeAt') {
            return atoi(val,undefined,count);
        }
        else {
            if (count == 1) {
                return atoi(val, null, count);
            }
            else {
                res = inc(res);
            }
            
        }
        if (pre == '0x') {
            res = pre + res;
        }
        else {
            res = +res;
        }
    };

