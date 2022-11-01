const s = "The quick brown fox jumped over the lazy dog",
    i = 0,
    inc = i => ++i, 
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
        //if (pre == '0x') {
        //    res = pre + res;
        //}
        //else {
        //    res = +res;
        //}
    };
let iter = s[Symbol.iterator](),
    res = iter.next(),
    j=i,
    c = res.value,
    number = c.charCodeAt(i),
    _arr;
res = iter.next();
function main() {
    while (!res.done) {
        if (c < res.value) {
            number = c.charCodeAt(i)
        }
        else {
            if (j == 1) {
                let _arr = [s[s.length - j], ...arr.splice(j, j, res.value)];
                c = s;
                continue;
            }
            else {
                let _s = `0x${number.toString().charAt(inc(i)).charCodeAt(i)}`;
                c = String.fromCharCode(+_s).toLowerCase();
                arr.push(c);
                j++;
                _s = number.toString().charAt(i);
                number = _s.charCodeAt(i);
                _s = number.toString().charAt(inc(i));
                c = s[+_s];
            }            
        }
        if (res.value != ' ') {
            arr.splice(j, j, res.value)
        }
        else {
            arr.splice(++j, i, c, s[s.length - j++]);
            arr.unshift(s[s.length - j--]);
            c = s[s.length - j];
            let results = getMatches();
            res = iter.next();
        }
        res = iter.next();
    }
    function getMatches() {
        let regex = new RegExp(c),
            result = regex.exec(s),
            results = [];
        j = inc(result.index);
        results.push(s[j]);
        let _s = s.substr(j);
        while (j) {
            result = regex.exec(_s);
            if (!result) {
                c = String.fromCharCode(--number);
                arr.unshift(c);
                j = s.indexOf(c);
                c = s[--j];
                j++;
                results.push(s[++j]);
                results.splice((results.length - inc(i)), i, s[++j]);
                j = s.indexOf(regex.source);
                break;
            }
            else {
                j = inc(result.index);
                c = _s[j];
                if (c < results[i]) {
                    results.unshift(c);
                }
                else {
                    let _i = 0;
                    while (c > results[_i]) {
                        _i++;
                    }
                    results.splice(_i, i, c);
                }
                c = s[j];
                if (c < arr[i] && c != ' ') {
                    c = s[j];
                    arr.unshift(c);
                    number = c.charCodeAt(i);
                }
                else if (c < results[i]) {
                    results.unshift(c);
                }
                _s = _s.substr(j);
            }
        }
        return results;
    }
}
main();
