let arr = [1, 2, 3, 45, 6];
let ans = arr[0]; // Start with the first element

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > ans) {
        ans = arr[i];
    }
}

console.log(ans);;