// Define variables
const a = 4;
const b = 5;
const c = ('6' as unknown) as number;
const d = ('cat' as unknown) as number;

// const multiply 
const multiply = (num1: number, num2: number) => {
    console.log(`${num1} * ${num2} =`, num1 * num2);
}

// const add
const add = (num1: number, num2: number) => {
    console.log(`${num1} + ${num2} =`, num1 + num2);
}

// supply variable to const multiply
multiply(a, b);
multiply(a, c);
// multiply(a, d);

// supply variable to const add
add(a, b);
add(a, c);
add(a, d);
