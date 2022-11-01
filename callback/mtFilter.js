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
    var output = []
    for (var index in this){
        if(this.hasOwnProperty(index)){
            var result = cb(this[index])
            output.push(result)
        }

    }
    return output
}

var htmls = courses.myFilter(function(course){
    course.point > 500
    return course
})

console.log(htmls)