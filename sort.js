const s = "The quick brown fox jumped over the lazy dog",
    i = 0,
    inc = i => ++i, 
    arr=[];
let iter = s[Symbol.iterator](),
    res = iter.next(),
    j = i,
    two = 2,
    k,
    c = res.value,
    cbArr = ['charCodeAt', () => c.toString(), 'charAt'],
    indArr = [];
res = iter.next();
function main() {
    while (!res.done) {         
        arr.splice(i, i, res.value);       
        for (let val of cbArr) {
            if (typeof (val) == "function") {
                c = val(c);
            }
            else {
                if (j == two && j != cbArr.length-inc(i)) {
                    let cb = cbArr[++j];
                    c = c[val](cb(i));
                    cb = cbArr[++j];
                    c = cb(c);
                    j--;
                    break;
                }
                else {
                    c = c[val](i);
                }                
            }
            j++;
        }
        j = j == cbArr.length ? 0 : --j;
        if (!j) {
            cbArr.push.apply(cbArr, [inc, () => s[+c]]);
        }
        else {
            j = s.length - inc(j);
            arr.unshift(s[j]);
            arr.push(c);
            j--;
            c = s[s.length - j];
        }        
        res = iter.next();
        k = Math.abs(j);
        if (k > two) {
            indArr.push(k);
        }
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
