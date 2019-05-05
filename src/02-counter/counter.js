export default class Counter {
    constructor(count = 0 ) {
        this.count = this.chkNum(count)? count : 0;
        this.WORNGMSG = '숫자만 넣어주세요'
    }

    chkNum(num){
        return typeof(num) ==='number';
    }

    increment(num = 1){
        return this.chkNum(num) ? this.count += num : this.WORNGMSG
    } 

    decrement(num = 1){
        return this.chkNum(num) ? this.count -= num : this.WORNGMSG
    }
    
    reset(num = 0){
        return this.count= num
    }

    getCount(){
        return this.count;
    }
}