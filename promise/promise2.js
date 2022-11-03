var users = [
    {
        id: 1,
        name: 'Bao Tran'
    },
    {
        id: 2,
        name: 'Linh Pham'
    }
]

var comments = [
    {
        id: 2,
        user_id: 1,
        content: 'Xin chao! Lam quen nha cung'
    },
    {
        id: 1,
        user_id: 2,
        content: 'Meo thich'
    }
]

function getComments() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(comments)
        }, 1000)
    })
}

function getUsersByIds(userIds) {
    return new Promise((resolve) => {
        var result = users.filter((user) => {
            userIds.includes(user.id)
        })
        resolve(result)

    })
}

getComments()
    .then((comments) => {
        var userIds = comments.map((comment) => {
            comment.user_id
        })
        return getUsersByIds(userIds)
            .then((users) => {
                return {
                    users: users,
                    comments: comments
                }
            })
    })
    .then((data) => {
        var commentBlock = document.getElementById('comment-block')
        var html = ''
        data.comments.forEach((comment) => {
            var user = users.find((user) => {
                return user.id === comment.user_id
            })            
            html += `<li>${user.name}: ${comment.content}</li>`
        });
        commentBlock.innerHTML = html
    })