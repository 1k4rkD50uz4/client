export default function BinaryAdder() { 
    let value = false, carry = false, result = false,
        i = 0, x = 2, y = 0, n = x ** x, b, lb= '', ub = '', s='', nStr='', sum=0;
    function inc() {
        result = value || carry;
        carry = value ^ carry ? false : true;         
    }
    return function () {
        while (y < 8) {
            b = (result | false);
            let temp = y;
            y += (x * b) ** (i++);
            if (temp!=y) {
                nStr += y;
            }
            inc(); 
            lb += b;
            if (!b) {
                ub += (result | false);
            }
            sum += y;
        }
        n = 0 + nStr + sum;
        s = s.padStart(8, '0');
        let out = [n, s];
        return out;
    }
} 
