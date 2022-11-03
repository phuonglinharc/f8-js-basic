var scores = [
    {
        subject: 'Math',
        point: 9
    },
    {
        subject: 'Literature',
        point: 8.3
    },
    {
        subject: 'English',
        point: 7.6
    }
]


Array.prototype.map2 = function (cb) {
    var output = []
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = cb(this[index])
            output.push(result)
        }
    }
    return output
}



var subList = scores.map2((score) => {
    return `<h2>Subject: ${score.subject}</h2>
    <h3>Point: ${score.point}</h3>
        `
})

console.log(subList.join(''))

