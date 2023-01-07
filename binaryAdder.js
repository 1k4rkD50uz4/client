import Util from "./util.js";
function Adder() { 
    let value = false, carry = false, result = false,
        i = 0, x = 2, y = 0, n = 2, b, lb= '', ub = '', s='', nStr='', sum=0;
    function inc() {
        result = value || carry;
        carry = value ^ carry ? false : true;         
    }
    return function () {
        n = n ** 2;
        while (y < 8) {
            b = (result | false);
            let temp = y;
            y += (x * b) ** (i++);
            if (temp!=y) {
                nStr += y;
            }
            inc(); 
            if (!b) {
                lb += b;  
                ub += (result | false);
            }
            else {
                lb += b;
            }
            sum += y;
        }
        n = 0 + nStr + sum;
        s = s.padStart(8, '0');
        let out = [n, s];
        return out;
    }
} 
const BinaryOperations = {
    namespace: `${Util.getNamespace.call({
        namespace: 'BinaryOperations'
    })}`,
    adder: Adder
};
export default BinaryOperations;