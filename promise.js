function sleep(ms){
    return new Promise((resolve) => {
        setTimeout(resolve,ms)
    })
}

sleep(1000)
.then(() => {
    console.log('I'); return sleep(1000)
})
.then(() => {
    console.log('Love'); return sleep(1000)
})
.then(() => {
    console.log('You'); return sleep(1000)
})
.then(() => {
    console.log('Very'); return sleep(1000)
})
.then(() => {
    console.log('Much!'); return sleep(1000)
})