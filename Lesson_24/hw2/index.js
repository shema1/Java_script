let student = [{
        name: 'Tom',
        birthDate: '03/11/2010'
    },
    {
        name: 'Kolya',
        birthDate: '02/15/2010'
    },
    {
        name: 'Sasha',
        birthDate: '07/5/2010'
    },
    {
        name: 'Oleh',
        birthDate: '12/18/2010'
    },
    {
        name: 'Igor',
        birthDate: '12/17/2010'
    }
];


const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function studentsBirthDays(students) {

    let obj = {}
    students.sort((a, b) => new Date(a.birthDate) - new Date(b.birthDate))
        .map(elem => {
            if (obj[months[new Date(elem.birthDate).getMonth()]] === undefined) {
                obj[months[new Date(elem.birthDate).getMonth()]] = [];
            }
            obj[months[new Date(elem.birthDate).getMonth()]].push(elem.name)
        });
    return obj
}

// console.log(studentsBirthDays(student))
export { studentsBirthDays }