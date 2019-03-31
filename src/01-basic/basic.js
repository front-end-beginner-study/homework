export default function sum() {
    var output = 0;
    for (var i = 0; i < arguments.length; i++) {
        output += arguments[i];
    }
	if(typeof(output) === 'number'){
        return output;
    }else{
        return '숫자를 넣어주세요';
    }
}
