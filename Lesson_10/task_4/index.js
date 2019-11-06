['Ann', 'Tom', 'Bob', 'Kate']

const getMessagesForBestStudents = (allStudents, failedStudents) => {
    const passedStudents = allStudents
        .filter(name => failedStudents.indexOf(name) === -1);

    const messages = passedStudents.map(name => 'Good job, ' + name);
    return messages
}

const allStudents = ['Ann', 'Tom', 'Bob', 'Kate'];
const failedStudents = ['Tom', 'Bob'];

console.log(getMessagesForBestStudents(allStudents, failedStudents));