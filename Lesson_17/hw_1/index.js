const user = {
    firstName: 'Jhon',
    lastName: 'Doe',
    getFullName() {
        console.log(this.firstName + ' ' + this.lastName)
        return this.firstName + ' ' + this.lastName;
    },
    setFullName(name, ln) {
        this.firstName = name;
        this.lastName = ln;
    }
}

// user.getFullName();
// user.setFullName('Tom', 'Bom')
// user.getFullName();
export { user };