var scores = [
    {
        subject: 'Math',
        point: 6
    },
    {
        subject: 'Literature',
        point: 8
    },
    {
        subject: 'English',
        point: 9
    }
]


//array.find tìm trong mảng, khi gặp giá trị thỏa mãn điều kiện sẽ ngừng ngay lập tức
Array.prototype.find2 = function(cb){
    var output = []
    for(var index in this){
        if(this.hasOwnProperty(index)){
            var result = cb(this[index])
            if(result){
                output = this[index]
                break;
            }
        }
    }
    return output
}


var html = scores.find2((score) => {
    return score.point > 5
})

console.log(html)