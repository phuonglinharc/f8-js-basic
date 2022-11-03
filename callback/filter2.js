var scores = [
    {
        subject: 'Math',
        point: 9
    },
    {
        subject: 'Literature',
        point: 8
    },
    {
        subject: 'English',
        point: 7
    }
]

Array.prototype.filter2 = function(cb){
    var output = []
    for(var index in this){
        if(this.hasOwnProperty(index)){
            var result = cb(this[index])
            if(result){
                output.push(this[index])
            }
        }
    }
    return output
}


var likeIt = scores.filter2((scoure) => {
    return scoure.point >= 8
    
    
})

console.log(likeIt)
