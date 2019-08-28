function multiply1(a, b) {
    return a*b;
}

const multiply2 = function(a, b) {
    return a*b;
};

const multiply3 = (a, b) => {
    return a*b;
};

const multiply4 = (a, b) => a*b;

console.log(multiply1(2,2));
console.log(multiply2(2,2));
console.log(multiply3(2,2));
console.log(multiply4(2,2));