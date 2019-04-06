export default function sum() {
    let output = 0;

    for (let i = 0; i < arguments.length; i++) {
        const isNum = typeof(arguments[i]) === 'number'
        isNum ? output += arguments[i] : output = "숫자를 넣어주세요"
    }
	return output;
}