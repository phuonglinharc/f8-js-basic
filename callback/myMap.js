let courses = ['Javascript', 'PHP','Ruby']

Array.prototype.myMap = function(cb){
    var output = []
    for(var index in this){
        if(this.hasOwnProperty(index)){
            var result = cb(this[index])
            output.push(result)
        }
    }
    return output
}


let htmls = courses.myMap(function(course){
    return `<h2>${course}</h2>`    
})

console.log(htmls.join(''))