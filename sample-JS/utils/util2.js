// Find largest number in arrage
const lgNum = (arr) => {
    let largest = 0;
    arr.forEach((x) => {
        if (x > largest) {
            largest = x;
        }
    });
    return largest;
};

// Remove the 3rd element from an array
const cut3 = (arr) => {
    arr.splice(2, 1);
    return arr;
}

// export functions
module.exports = {
    lgNum,
    cut3
};
