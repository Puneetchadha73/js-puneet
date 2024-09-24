const myArray = [11,22,33,44,55]
console.log(myArray[3])

const myArray2 = new Array("A","B","C","D","E")
console.log(myArray2[0])
myArray2.push("F")
console.log(myArray2)
// console.log(myArray2[5])
myArray2.pop()
myArray2.pop()
console.log(myArray2)

myArray2.unshift("AA")
console.log(myArray2)

myArray2.shift()
console.log(myArray2)
myArray2.push("F")
console.log(myArray2.includes("F"))

const newArray = myArray2.join()
console.log(newArray)