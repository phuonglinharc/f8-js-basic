function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}
sleep()
    .then(() => {
        console.log(1)
        return sleep(1000)
    })
    .then(() => {
        console.log(2)
        return sleep(1000)
    })
    .then(() => {
        console.log(3)
        return sleep(1000)
    })