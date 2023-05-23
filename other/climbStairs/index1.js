/**
 * 时间复杂度O(n), 空间复杂度O(n)
 * dp[i]：爬到i级台阶的方法数目。注意数组是从0开始的，所以数组大小为n+1
方程：
可能有两种方式爬到第i级台阶：
从第i-1级爬1个
从第i-2级爬2个
所以dp[i]=dp[i-1]+dp[i-2]
初始值:dp[0]=0,dp[1]=1,dp[2]=2
 * @param {*} n 
 * @returns 
 */

var climbStairs = function (n) {
    if (n <= 0) {
        return 0
    }
    //初始化
    let dp = new Array(n + 1)
    dp[0] = 0
    dp[1] = 1
    dp[2] = 2
    //关系式
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
};
let num = climbStairs(4);

console.log(num);

