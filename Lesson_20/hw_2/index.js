class User {

    constructor(id, name, sessionld) {
        this._id = id;
        this._name = name;
        this._sessionld = sessionld;
    }
}

class UserRepository {
    constructor(arr) {
        this._users = Object.freeze(arr);;
    }

    getUserNames() {
        return this._users.map(i => i._name)
    };
    getUserIds() {
        return this._users.map(i => i._id)
    };
    getUserNameById(id) {
        let userName = this._users.filter(i => i._id == id)
        if (userName.length == 0) {
            console.log('not found')
            return
        }
        return userName
    };
}

export { User, UserRepository }

// const users = [
//     new User('1', 'Tom', '11'),
//     new User('2', 'Bob', '12'),
//     new User('3', 'John', '13'),
// ];

// let test = new UserRepository(users);
// test.getUserNames()
// test.getUserIds()
// test.getUserNameById(11)