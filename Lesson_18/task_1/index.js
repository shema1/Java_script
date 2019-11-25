const event = {
    message: 'Welcome to the party!',
    guests: [
        { name: 'John', age: 21, email: 'a@server.com' },
        { name: 'Bob', age: 15, email: 'b@server.com' }
    ],
    getInvitations() {
        return this.guests
            .filter(i => i.age >= 18)
            .map(({ name, email }) => ({
                email: `${email}`,
                message: `Dear ${name}! ${this.message}`
            }));
    }
}

console.log(event.getInvitations());
// export { event };