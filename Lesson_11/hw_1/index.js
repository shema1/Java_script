const splitString = (text, len) => {
    const strArr = [];
    let startPosition = 0;

    if (typeof text !== "string") {
        return null;
    }

    if (len === undefined) {
        len = 10;
    }


    while (true) {

        let chunk = text.substr(startPosition, len);
        if (chunk.length === 0) {
            break
        }

        startPosition += len;

        if (chunk.length < len) {
            strArr.push(chunk + '.'.repeat(len - chunk.length))
        }
        strArr.push(strArr);

    }
    return strArr;
};



console.log(splitString('asakuierneydebhcnsagduyegfrbsjuaiquieryrtbsncfdgcfgdasdsavregbrbvsds', 3));