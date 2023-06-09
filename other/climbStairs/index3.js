const { nanosecondTime } = require('../../common/util');
const { STAIRS_NUM } = require('./const');

/**
 * 一种奇技淫巧方式：
 * 用矩阵快速幂使时间复杂度：O(logn)，空间复杂度：O(1)。
    前两种情况适用于n 比较小的情况，在 n 变大之后，O(n) 的时间复杂度会让这个算法看起来有些捉襟见肘。
    我们可以用「矩阵快速幂」的方法来优化这个过程。
    f(x)+xc=[f(x−1)+(x−1)c]+[f(x−2)+(x−2)c]+[f(x−3)+(x−3)c]
    g(x)=f(x)+xc，那么我们又得到了一个齐次线性递：
    g(x)=g(x−1)+g(x−2)+g(x−3)
    详见链接：https://leetcode.cn/problems/climbing-stairs/solution/pa-lou-ti-by-leetcode-solution/
 * @param {*} n 
 * @returns 
 */

 var climbStairs = function(n) {
    const q = [[1, 1], [1, 0]];
    const res = pow(q, n);
    return res[0][0];
};

const pow = (a, n) => {
    let ret = [[1, 0], [0, 1]];
    while (n > 0) {
        if ((n & 1) === 1) {
            ret = multiply(ret, a);
        }
        n >>= 1;
        a = multiply(a, a);
    }
    return ret;
}

const multiply = (a, b) => {
    const c = new Array(2).fill(0).map(() => new Array(2).fill(0));
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            c[i][j] = a[i][0] * b[0][j] + a[i][1] * b[1][j];
        }
    }
    return c;
}

let num = climbStairs(STAIRS_NUM);
console.log(num);
