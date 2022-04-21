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
            outData;
        function main(inData=undefined) {
            while (!res.done) {
                if (!inData) {
                    c = res.value;
                    arr.push(res.value.toLowerCase());
                    //c = res.value;
                    //arr[++i]=c;
                    //patternStr+=c+'-';
                    
                    //return outData;
                }
                else {
                    c = inData;
                    //pattern = new RegExp('[' + outData
                    //    + '-' + vowels[i] + ']'); 
                    //number = c.charCodeAt(i);
                    //pattern=//;
                    //vowels[i++];
                    
                    
                    //pattern=/c/;
                    //matches=s.match(pattern);
                    //arr[i]=matches[0];
                    //arr[i]=matches[0];
                    
                }
                if (!outData) {
                    //res = iterator.next();
                }
                else {
                    let compRes = compare(c, res.value);
                    if (compRes == -1) {
                        arr.push(c);
                        c = null;
                    }
                    else if (compRes == 1) {

                    }
                    else {

                    } 
                }                
                outData = c;
                return outData;                
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