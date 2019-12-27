export const fetchUserData = async userName => {
    const response = await fetch(`https://api.github.com/users/${userName}`)
    if (response.ok) {
        return await response.json()
    }
    throw new Error('Failed to load data')
};

export const fetchRepositories = async url => {
    const respons = await fetch(url)

    if (respons.ok) {
        return await respons.json()
    }
    throw new Error('Failed to load data2')

}