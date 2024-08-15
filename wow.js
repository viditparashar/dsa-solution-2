const arr1 = [1,23,43,3,4,553,123232];

let largest = arr1[0];
for(let i = 0; i < 6;i ++){
    if(arr1[i] > largest){
        largest = arr1[i];
    }
};

console.log("The largest element of array is " + largest);