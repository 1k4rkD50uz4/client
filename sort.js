const s = "The quick brown fox jumped over the lazy dog",
    i = 0,
    inc = i => ++i;
let iter = s[Symbol.iterator](),
    res = iter.next(),
    j=i,
    c = res.value,
    cbArr = ['charCodeAt', 'toString', 'charAt'],
    arr = [];
res = iter.next();
function main() {
    while (!res.done) { 
        arr.splice(i, i, res.value); 
        atoi();
        res = iter.next();
    }
    function atoi() {
        for (let val of cbArr) {
            if (typeof (val) == "function") {
                c = val(c);
            }
            else {
                let param;
                if (typeof (c) == "number") {
                    param = undefined;
                }
                else {
                    if (!j) {
                        param = i;
                    }
                    else {
                        param = val == 'charCodeAt' ? i : j;
                    }
                } 
                c = c[val](param);
            }
        }
        if (!j) {
            j++;
            atoi();
        }
        else if (j == inc(i)) {
            arr.unshift(s[s.length - j++]);
            arr.push(s[c]);
            c = s[s.length - j++];
            res = iter.next();
            arr.unshift.call(arr, s[s.length - j], res.value);
            getMatches();
        }
    }
    function getMatches() {
        let regex = new RegExp(c),
            result = regex.exec(s),
            results = [],
            done=false;
        j = inc(result.index);
        results.push(s[j]);
        let _s = s.substr(j);
        while (!done) {            
            result = regex.exec(_s);
            j = inc(result.index);
            c = _s[j];
            let next = s[s.length - j];
            if (inc(c.charCodeAt(i)) == next.charCodeAt(i)) {
                results.push.call(results, c, next);
                c = s[s.length - ++j];
                if (inc(next.charCodeAt(i)) == c.charCodeAt(i)) {
                    results.push(c);
                    c = s[s.length - ++j];
                    arr.unshift(c);
                }
            }
            c = arr[arr.length - inc(i)];
            next = _s[j];
            if (inc(c.charCodeAt(i)) == next.charCodeAt(i)) {
                arr.push(next);
            }
            _s = _s.substr(inc(i));
            c = _s[i];
            results.unshift(c);
            res = iter.next();
            res = iter.next();
            c = res.value;
            j = _s.indexOf(String.fromCharCode(inc(regex.source.charCodeAt(i))));
            next = c;
            c = _s[j];
            if (inc(c.charCodeAt(i)) == next.charCodeAt(i)) {
                results.splice(inc(i), i, regex.source, c, next);
                _s = _s.substr(inc(i));
            }
            c = _s[inc(i)];
            next = arr[arr.length - inc(i)];
            if (inc(c.charCodeAt(i)) == next.charCodeAt(i)) {
                results.splice(inc(i), i, regex.source, c, next);
                _s = _s.substr(inc(i));
            }
        }
    }
}
main();
