function createLogger() {
    let logInfo = [];
    return {
        warn: function(info) {
            logInfo.push({
                message: info,
                dateTime: new Date(),
                type: 'warn',
            })
        },
        error: function(info) {
            logInfo.push({
                message: info,
                dateTime: new Date(),
                type: 'error',
            })
        },
        log: function(info) {
            logInfo.push({
                message: info,
                dateTime: new Date(),
                type: 'log',
            })
        },

        getRecords: function(ins) {
            if (ins === undefined) {
                return logInfo
            }

            return logInfo.filter(i => i.type === ins).sort((a, b) => b.dateTime.getTime() - a.dateTime.getTime());
        },
    }
}
export { createLogger };