['Ann', 'Tom', 'Bob', 'Kate']

const getMessagesForBestStudents = (allStudents, failedStudents) => {
    const passedStudents = allStudents
        .filter(name => failedStudents.indexOf(name) === -1);
    return passedStudents
}

const allStudents = ['Ann', 'Tom', 'Bob', 'Kate'];
const failedStudents = ['Tom', 'Bob'];

console.log(getMessagesForBestStudents(allStudents, failedStudents));