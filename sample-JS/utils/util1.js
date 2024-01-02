// Add numbers to array
const sum = (arr) => {
    let total = 0;
    arr.forEach((x) => {
        total += x;
    });
    return total;
};

// Concat two arrays
const concat = (arr1, arr2) => {
    return [...arr1, ...arr2];
};

// export functions
module.exports = {
    sum,
    concat
};
