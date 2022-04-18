export default function StringOperations() {
    function init() {
        let s = "The quick brown fox jumped over the lazy dog",
            iterator = s[Symbol.iterator](),
            res = iterator.next(),
            i = 0,
            c,
            number,
            vowels = ['a', 'e', 'i', 'o', 'u'],
            arr = [],
            inData,
            outData,
            patternStr='(',
            matches;
        function main(inData=undefined) {
            while (!res.done) {
                if (!inData) {
                    c = res.value;
                    //arr[++i]=c;
                    //patternStr+=c+'-';
                    outData = c;
                    return outData;
                }
                else {
                    number = c.charCodeAt(i);
                    pattern=//;
                    //vowels[i++];
                    
                    
                    pattern=/c/;
                    matches=s.match(pattern);
                    arr[i]=matches[0];
                    arr[i]=matches[0];
                    
                }
                res = iterator.next();
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