function test(a, b) {
    return Math.sqrt(a * a + b * b);
}

function spy(func) {
    function reg(...arg) {
        reg.calls.push(arg)
        return func.apply(this, arg);
    }

    reg.calls = []
    return reg
}



const spyTest = spy(test);
spyTest(4, 2);
spyTest(9, 1);

console.log(spyTest.calls)


// const user = {
//     name: 'John',
//     sayHi() {
//         return this.name;
//     }
// };
// const spyMethod = spy(user.sayHi);
// spyMethod.apply({ name: 'Tom' }); // 'Tom'
// console.log(spyMethod.calls) // [ [] ]

export { spy }