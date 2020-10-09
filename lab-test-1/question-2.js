function resolvedPromise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Success') 
        }, 500)
    })
}

resolvedPromise().then((message) => {
    console.log(message)
})

resolvedPromise()

function rejectedPromise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Rejected') 
        }, 500)
    })
}

rejectedPromise().catch((message) => {
    console.log(message)
})

