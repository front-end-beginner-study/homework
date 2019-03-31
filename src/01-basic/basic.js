export default function sum() {
    let output = 0;

    for (let i = 0; i < arguments.length; i++) {
        output += arguments[i];
    }

    const isNum = typeof(output) === 'number';

    return isNum ? output : '숫자를 넣어주세요';

	// if(isNum){
    //     return output;
    // }else{
    //     return '숫자를 넣어주세요';
    // }
}
