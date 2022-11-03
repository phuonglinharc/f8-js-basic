var users = [
    {
        id: 1,
        name: 'Kien Dam'
    },
    {
        id: 2,
        name: 'Son Dang'
    },
    {
        id: 3,
        name: 'Hung Dam'
    }

]

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Anh Son chua ra video moi :('
    },
    {
        id: 2,
        user_id: 2,
        content: 'Vua moi ra em oi!'
    }
]

function getComments() {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve(comments)
        }, 1000)
    })
}
function getUsersByIds(userIds) {
    return new Promise((resolve) => {
        var result = users.filter((user) => {
            return userIds.includes(user.id)
        })
        setTimeout(() => {
            resolve(result)
        }, 1000);
    })
}

getComments()
    .then(function (comments) {
        var userIds = comments.map((comment) => comment.user_id)
        return getUsersByIds(userIds) //promise
            .then((users) => {
                return {
                    users: users,
                    comments: comments
                }
            })
    })
    .then((data) => {
        var commentBlock = document.getElementById("comment-block")
        var html = ''
        data.comments.forEach((comment) => {
            var user = users.find((user) => {
                return user.id === comment.id                
            })
            html += `<li>${user.name}: ${comment.content}</li>`
        });
        commentBlock.innerHTML = html
    })

