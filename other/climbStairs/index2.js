/**
 * 时间复杂度O(n), 空间复杂度O(1)
 * 用滚动数组思想把空间复杂度优化成O(1)
 用 f(x) 表示爬到第 x 级台阶的方案数，考虑最后一步可能跨了一级台阶，也可能跨了两级台阶，可得出如下式子：
 x 级台阶的方案数f(x)=f(x−1)+f(x−2)
 * @param {*} n 
 * @returns 
 */
var climbStairs = function(n) {
    let p = 0, q = 0, r = 1;
    for (let i = 1; i <= n; ++i) {
        p = q;
        q = r;
        r = p + q;
    }
    return r;
};

let num = climbStairs(4);

console.log(num);