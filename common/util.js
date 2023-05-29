/**
 * 记录时间
 * @param {*} func 
 * @param {*} inputData 
 * @returns 毫秒
 */
function measureTime(func, inputData) {
    const startTime = Date.now();
    func(inputData);
    const endTime = Date.now();
    return endTime - startTime;
}

/**
 * 记录时间
 * @param {*} func 
 * @param {*} inputData 
 * @returns 纳秒
 */
function nanosecondTime(func, inputData) {
    const startTime = process.hrtime();
    func(inputData);
    const endTime = process.hrtime();
    return endTime[1] - startTime[1];
}

module.exports = {
    measureTime,
    nanosecondTime
}