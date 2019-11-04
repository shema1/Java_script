function findDivCount(a, b, n) {
    let count = 0
    for (let i = a; i <= b; i++) {
        if (i % n === 0) {
            count++;
        }
    }
    return count
}

findDivCount(10, 40, 3);