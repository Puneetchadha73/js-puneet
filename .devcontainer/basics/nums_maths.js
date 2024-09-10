let balance = 100
console.log(balance)
console.log(typeof balance)

const salary = new Number(2000)
console.log(salary)
console.log(salary.toString())
console.log(salary.toString().length)
console.log(salary.toFixed(2))

const precise = 340.2345
console.log(precise.toPrecision(3))

const check_hundred = 10000000000
console.log(check_hundred.toLocaleString('en-IN'))


// Maths - Default with JS

console.log(Math.abs(-34.66))
console.log(Math.round(4.6))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.8))
console.log(Math.min(2,3,4,5,6))
console.log(Math.max(2,3,4,5,6))