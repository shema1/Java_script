export const parseUser = str => {
    try {
        let result = JSON.parse(str)
        return result
    } catch (error) {
        console.log(error.name)
        return null
    }
}