const s = "The quick brown fox jumped over the lazy dog",
    inc = i => ++i,
    dec = i => --i,
    iter = s[Symbol.iterator]();
let i = s.length - 1,
    c = s[i],
    arr = [],
    res = iter.next();
export default function main() {
    while (!res.done) {
        if (res.value != ' ') {            
            if (res.value < c) {
                arr.push(c);
                i--;
                c = s[dec(i)];
            }
            else if (res.value > c) {
                let n1 = res.value.charCodeAt(0),
                    n2 = inc(arr[arr.length - 1].charCodeAt(0));
                if (n1 == n2) {
                    arr.push(res.value);
                }
                else {
                    n2 = inc(c.charCodeAt(0));
                    if (n1 == n2) {
                        arr.unshift.apply(arr, [c, res.value]);
                    }
                }
            }
        }
        else {
            c = String.fromCharCode(s[i].charCodeAt(0));
            return c;
        }
        res = iter.next();
    }
}