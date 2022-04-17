export default function StringOperations() {
    function init() {
        let s = "The quick brown fox jumped over the lazy dog",
            iterator = s[Symbol.iterator](),
            res,
            i = 0,
            c,
            number,
            vowels = ['a', 'e', 'i', 'o', 'u'],
            arr = [],
            inData,
            outData;
        function main(inData=undefined) {
            while (!res.done) {
                if (!inData) {
                    res = iterator.next();
                    c = res.value.toLowerCase();
                    arr.push(res.value);
                    outData = res.value;
                    return outData;
                }
                else {

                }
                let compRes = compare(res.value, c);
                if (compRes == -1) {
                    arr.push(c);
                    state = 'stopped';
                }
                else if (compRes == 1) {

                }
                else {

                }
                res = iterator.next();
            }
        }
        function compare(a, b) {
            if (a < b) {
                return -1;
            }
            else if (a > b) {
                return 1;
            }
            else {
                return 0;
            }
        }
        return main;
    }
    return init();
};