export const requestUserData = (userId, callback) => {


    const onLoad = () => {
        if (userId == 'broken') {
            callback(null, 'Failed to load user data')
            return
        }

        callback(null, { name: 'John', age: 17, userId: 'userid777', email: 'userid777@example.com' })
    }
    setTimeout(() => onLoad, Math.floor(Math.random() * 3 + 1) * 1000);
}