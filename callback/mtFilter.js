var courses = [
    {
        name: 'Javascript',
        point: 500
    }, {
        name: 'PHP',
        point: 750
    },
    {
        name: 'Ruby',
        point: 900
    }
]

Array.prototype.myFilter = function(cb){
    let output = []
    for(let index in this){
        if(this.hasOwnProperty(index)){
            var result = cb(this[index])
            if(result){
                output.push(this[index])
            }
        }
    }
    return output
}

var final = courses.myFilter((course) => {
    return course.point > 500
})

console.log(final)