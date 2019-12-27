export const getUsersBlogs = async(...userId) => {

    try {
        const wraper = userId;
        let test = []
        for (let index = 0; index < wraper.length; index++) {
            let response = await fetch(`https://api.github.com/users/${wraper[index]}`)
            let userData = await (response.json())
            test.push(userData.blog)
        }

        // wraper.map(elem => {
        //     let response = await fetch(`https://api.github.com/users/${elem}`)
        //     let userData = await (response.json())
        //     test.push(userData.blog)
        // })

        console.log(test)
    } catch (e) {
        throw new Error('Failed')
    }
}


getUsersBlogs("facebook", "shema1", "google");