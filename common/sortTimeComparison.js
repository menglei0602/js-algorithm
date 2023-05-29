const {
    measureTime
} =  require('./util');

const RANDOM_LENGTH = 1000 * 10;
/**
 * 随机生成整数数组
 * @param {*} length 
 * @returns 
 */
function generateRandomArray(length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * RANDOM_LENGTH * 10));
    }
    return arr;
}

// 1、冒泡排序
function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

const generatedArray = generateRandomArray(RANDOM_LENGTH);
const bubbleSortTime = measureTime(bubbleSort, generatedArray);
console.log(`冒泡排序用时：${bubbleSortTime}ms`);

// 2、选择排序
function selectionSort(arr) {
    let len = arr.length;
    let minIndex;
    for (let i = 0; i < len - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}

const selectionSortGeneratedArray = generateRandomArray(RANDOM_LENGTH);
const selectionSortTime = measureTime(selectionSort, selectionSortGeneratedArray);
console.log(`选择排序用时：${selectionSortTime}ms`);

//   3.插入排序
function insertionSort(arr) {
    let len = arr.length;
    for (let i = 1; i < len; i++) {
        let j = i;
        let temp = arr[i];
        while (j > 0 && arr[j - 1] > temp) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = temp;
    }
    return arr;
}

const insertionSortGeneratedArray = generateRandomArray(RANDOM_LENGTH);
const insertionSortTime = measureTime(insertionSort, insertionSortGeneratedArray);
console.log(`插入排序用时：${insertionSortTime}ms`);

//   4. 归并排序
function mergeSort(arr) {
    const len = arr.length;
    if (len <= 1) {
        return arr;
    }
    let midIndex = Math.floor(len / 2);
    let leftArr = arr.slice(0, midIndex);
    let rightArr = arr.slice(midIndex);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] < rightArr[j]) {
            result.push(leftArr[i]);
            i++;
        } else {
            result.push(rightArr[j]);
            j++;
        }
    }
    return result.concat(leftArr.slice(i)).concat(rightArr.slice(j));
}

const mergeSortGeneratedArray = generateRandomArray(RANDOM_LENGTH);
const mergeSortTime = measureTime(mergeSort, mergeSortGeneratedArray);
console.log(`归并排序用时：${mergeSortTime}ms`);

//   5.快速排序
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivotIndex = Math.floor(Math.random() * arr.length);
    let pivot = arr[pivotIndex];
    let leftArr = [];
    let rightArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === pivotIndex) {
            continue;
        }
        if (arr[i] < pivot) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }
    return quickSort(leftArr).concat(pivot, quickSort(rightArr));
}

const quickSortGeneratedArray = generateRandomArray(RANDOM_LENGTH);
const quickSortTime = measureTime(quickSort, quickSortGeneratedArray);
console.log(`快速排序用时：${quickSortTime}ms`);


// 将五种排序算法的执行时间进行比较：
console.log('-----------------------------------');
console.log(`冒泡排序用时：${bubbleSortTime}ms`);
console.log(`选择排序用时：${selectionSortTime}ms`);
console.log(`插入排序用时：${insertionSortTime}ms`);
console.log(`归并排序用时：${mergeSortTime}ms`);
console.log(`快速排序用时：${quickSortTime}ms`);