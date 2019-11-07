const splitText = (text, len) => {
    const strArr = [];
    let startPosition = 0;
    while (true) {

        let chunk = text.substr(startPosition, len);
        if (chunk.length === 0) {
            break
        }

        strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
        startPosition += len;

    }
    return strArr.join('\n');
};


console.log(splitText('asd fsdfasdfa sdfs a dfsdafsgjh fdgjfgh sdfgds', 4))