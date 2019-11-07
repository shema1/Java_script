const splitString = (text, len) => {
    const strArr = [];
    let startPosition = 0;

    if (len === undefined) {
        len = 10;
    }
    if (typeof text !== "string") {
        return null;
    }

    while (true) {

        let chunk = text.substr(startPosition, len);
        if (chunk.length === 0) {
            break
        }

        strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
        startPosition += len;

        if (chunk.length < len) {
            strArr.push(chunk + '.'.repeat(len - chunk.length))
        } else {
            strArr.push
        }
    }
    return strArr.join('\n');
};



// console.log(splitString('asakuierneydebhcnsagduyegfrbsjuaiquieryrtbsncfdgcfgdasdsavregbrbvsds', 3));