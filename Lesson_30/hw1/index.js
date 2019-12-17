export const delay = time => {

    let promise = new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(console.log('Done'))
        }, time)
    })
    return promise
}