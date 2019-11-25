const user = {
    firstName: '',
    lastName: '',
    getFullName() {
        console.log(this.firstName + ' ' + this.lastName)
        return this.firstName + ' ' + this.lastName;
    },
    setFullName(fullName) {
        let array = fullName.split(' ');
        this.firstName = array[0];
        this.lastName = array[1];
    }
}

user.getFullName();
// user.setFullName('Tom Bom')
// user.getFullName();
export { user };