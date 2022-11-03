var numArray = [1,2,3,4,5]

Array.prototype.reduce2 = function(cb,result){
    let i = 0
    if(arguments.length < 2){
        i = 1
        result = this[0]
    }
    for(; i < this.length; i++){
        result = cb(result,this[i],i,this)
    }
}

var sum = numArray.reduce((total, number, index, array) => {
    console.log(total,number,index,array)
    return total += number

},10)
console.log(sum)