// stack(primitive variables) and heap(non-primitive variables) memory


let variable1 = "Puneet Stack Memory"
let varibale2 = variable1
varibale2 = "Second Stack memory"

console.log(variable1)
console.log(varibale2)


let object1 = 
{ name: "Puneet",
  age : 10
}

let object2 = object1
object2.name = "Puneet Change"

console.log(object1.name)