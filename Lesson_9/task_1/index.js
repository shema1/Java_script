const user = {
    'Tom': 17,
    'Jhon Doe': 19,
    'Bob': 18
};

const getAdults = userObj => {
    const UsersArr = Object.entries(userObj);
    const filterUsersArr = UsersArr.filter(user => user[1] >= 18);
    const userNames = filterUsersArr.map(user => user[0]);

    return userNames
}

// const UsersArr = Object.entries(user);
console.log(getAdults(user));