export const requestUserData = userId => {
    return new Promise((resolve, reject) => {
        if (userId === 'broken') {
            setTimeout(() => {
                reject(new Error('User not found'));
            }, 500);
        }
        setTimeout(() => {
            resolve({
                name: 'John',
                age: 17,
                email: `${userId}`,
                userId,
            });
        }, 1000);
    });
};

// requestUserData('trrr')
//     .then(data => { console.log(data) })
//     .catch(error => { console.log(error) })