var scores = [
    {
        subject: 'Math',
        point: 7
    },
    {
        subject: 'Literature',
        point: 9
    },
    {
        subject: 'History',
        point: 5
    }
]



// Array.prototype.reduce2 = function(callback, bienluutru){
//     for ( var i=0; i<this.length; i++){
//         bienluutru = callback(bienluutru,this[i])
//     }
//     return bienluutru
// }

// var avegare = scores.reduce2(function(acc,curVal){
//         return acc + curVal.point
//     },0)
// console.log(avegare)


// var ketQua = scores.reduce(function(a,b){
//     return a + b.point
// })
// console.log(ketQua)

Array.prototype.myReduce = function(cb, acc){
    acc = 0
    for(var index in this){
        if(this.hasOwnProperty(index)){
            acc = cb(acc,this[index])
        }
    }
    return acc
}

var i = 0
var avegare = scores.myReduce(function(a,b){
    i++
    console.log(i,a)
    return a + b.point
})

console.log(avegare)