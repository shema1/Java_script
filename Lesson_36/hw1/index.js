export const getUsersBlogs = async(userId) => {


    // const wraper = userId;
    let test = []
    for (let index = 0; index < userId.length; index++) {
        try {
            let response = await fetch(`https://api.github.com/users/${userId[index]}`)
            let userData = await (response.json())
            test.push(userData.blog)
        } catch (e) {
            console.log(e.message)
        }
        // if (!response.ok) throw new Error('Failed to load data');
    }

    return test
}

// export { getUsersBlogs }
// getUsersBlogs('google', "facebook", 'shema1')
//     .then(response => console.log(response));