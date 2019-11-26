function User(name, age) {
    this.name = name;
    this.age = age;
}

User.prototype.sayHi = function() {
    console.log(`Hi, I am ${this.name}`);
}

User.prototype.requestNewPhoto = function() {
    console.log(` New photo request was sent for${this.name}`);
}

User.prototype.setAge = function(age) {
    if (age >= 25) {
        this.age = age;
        console.log(` New photo request was sent for ${this.name}`)
        return this.age;
    }
    if (age <= 0) {
        return false
    }
}


let user1 = new User('tom', 22);

console.log(user1)