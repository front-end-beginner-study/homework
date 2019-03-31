export default function sum() {
  const argumentsArr = Array.from(arguments);
  const add = argumentsArr.reduce((prev, curr) => prev + curr);
  const argumentsType = argumentsArr.map((a) => typeof a);
  const error = argumentsType.map((a) => {
    if (a === 'string' || a === 'boolean' || Array.isArray(arguments[0])) {
      return '숫자를 넣어주세요';
    } else {
      return add;
    }
  });
  return error[0];
}

// let num = 0
//  for(let i = 0; i < arguments.length ; i++){
//    const argumentsType = typeof arguments[i];
//    if(argumentsType==="string" || argumentsType==="boolean" || Array.isArray(arguments[i])){
//      return 'gre'
//    } else {
//     num += arguments[i]
//    }
//  }
//    return num
// }
