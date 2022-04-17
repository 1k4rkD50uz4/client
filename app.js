let s = "The quick brown fox jumped over the lazy dog",
    iter = s[Symbol.iterator](),
    i = 0,
    res = iter.next(),
    c = res.value.toLowerCase(),
    vowels = ['a', 'e', 'i', 'o', 'u'],
    vow = vowels[i++],
    j = s.length - i,
    number = vow.charCodeAt(0),
    arr = [];
export default function sort() {
    while (!res.done) {
        aa.unshift.apply(aa,
            [
                String.fromCharCode(number++),
                String.fromCharCode(number)
            ]
        );
        ba.unshift.apply(ba,
            [
                s.charAt(j),
                s.charAt(i)
            ]
        );
        ca.push(c);
        number = c.charCodeAt(0) + 1;
        c = String.fromCharCode(number);
        ca.push(c);
        i = s.indexOf(c) + 1;
        ba.push(s.charAt(i));
        j = vowels.indexOf(s.charAt(i)) + 1;
        i = s.indexOf(vowels[j]);
        ca.push(match);
    }
}



