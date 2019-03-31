export default function sum(x, y) {
    var type  = x || y;
    
    if (typeof (type) === 'number') {
        return x + y;
    }else{
        return '숫자를 넣어주세요';
    }
    
    
    // if (typeof (type) === 'number') {
    //     return x + y;
    // }else if(typeof (type) === 'string'){
    //     return '숫자를 넣어주세요';
    // }else if(typeof(type) === 'boolean'){
    //     return '숫자를 넣어주세요';'
    // }else if(typeof(type) === 'array'){
    //     return '숫자를 넣어주세요'
    // }
}
