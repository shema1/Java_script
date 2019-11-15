import { createLogger } from './index.js'

it('must be array', () => {
    const log = createLogger();
    const result = log.getRecords();
    expect(result).toEqual([]);
})


it('Only string', () => {
    const log = createLogger();
    const result = log.warn("string");
    expect(result).toEqual(null);
})

it('Empty array', () => {
    const log = createLogger();
    log.warn('test1');
    log.error('test2');
    const result = getRecords;
    expect(result).toEqual([]);
})