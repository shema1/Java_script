export const fetchUserData = userName => {
    return fetch(`https://api.github.com/users/${userName}`)
        .then(respons => respons.json())
        //   .then(responss => console.log(responss))

};

export const fetchRepositories = url => {
    return fetch(url)
        .then(response => response.json())
}