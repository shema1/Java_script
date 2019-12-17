export const delay = time => {

    let promise = new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log('Done')
        }, time)
    })
    return promise
}