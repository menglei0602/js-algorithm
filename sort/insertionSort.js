/**
 * 插入排序
 */
Array.prototype.insertionSort = function () {
    for (let i = 1; i < this.length; i += 1) {
        const temp = this[i]; // 保存当前数据
        let j = i;
        while (j > 0) {
            if (this[j - 1] > temp) {
                this[j] = this[j - 1];
            } else {
                break;
            }
            j -= 1;
        }
        this[j] = temp;
    }
};

const arr = [2, 4, 5, 3, 1];
arr.insertionSort();
