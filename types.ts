// any: dynamic typing
let season: any
season = 2
season = "two"

// unknown: could be any type but in order to call a member you need to check the type
let val: unknown = 22
val = []

if (val instanceof (Array)) {
  val.push(55)
  console.log(`Length: ${val.length}`)
}

// Intersection 
let person: { name: string } & { age: number }
person = { name: 'Bob', age: 55 }
console.log(`Name: ${person.name} | Age: ${person.age}`)

// Union 
let calification: string | number
calification = 10
calification = "A++"

// Literal
let color: 'blue' | 'red' | 'green'
color = 'red'

// Type alias
type Points = 10 | 20 | 35 | 50
let score: Points = 50

type User = {
  name: string,
  age: number,
  role: 'reader' | 'writer' | 'admin'
}

let bob: User = {
  name: 'Bob', 
  age: 50, 
  role: 'admin'
}

// Functions as type
type Sum = (n1: number, n2: number) => number
let sum: Sum = (a: number, b: number): number => {
  return a + b
}
console.log(`${10} + ${5}: ${sum(10, 5)}`)

// Never: this is used to indicate that a function never return a value
function printValue(value: number): never | void {
  if (value < 0) {
    throw Error("Value cannot be negative")
  } else {
    console.log(val)
  }
}

// Classes | public members
class Car {
  constructor(public brand: string) { }
  model: number

  describe(): void {
    console.log(`Brand: ${this.brand} | Model: ${this.model ? this.model : 'NA'}`)
  }
}

let car = new Car('Ford')
car.model = 1996
car.describe()

// Classes | access modifiers 
// getters and setters only work in ES6 | tsc --target "ES6" <myScript>
class Person {
  constructor(
    private readonly firstName: string,
    private readonly lastName: string,
    private email: string
  ) { }

  // get FirstName() {
  //   return this.firstName
  // }
}

// Classes | static members
class Scorer {
  static points: number
  constructor() { }
}
Scorer.points = 50
console.log(`Actual Score: ${Scorer.points}`)

// Interfaces
interface Pet {
  name: string,
  kind: 'dog' | 'cat' | 'reptile',
  speak: (times: number) => void
}

let roco: Pet = {
  name: "Roco",
  kind: "dog",
  speak(times: number): void {
    for (let i = 0; i < times; i++) {
      console.log("wow ")
    }
  }
}
roco.speak(3)

// abstract classes, inheritance, and protected members
// protected members are accesible from the class itself and subclasses only
abstract class Animal {
  constructor (
    protected name: string,
    protected legs: number
  ){}
  abstract speak(): void
}
class Cat extends Animal {
  constructor(name: string){
    super(name, 4)
  }

  speak(): void {
    console.log("Meow")
  }
}
let cat = new Cat("Rick")
cat.speak()

// Interface implementation

interface IAnimal {
  name:string,
  speak():void
}

interface IFeline extends IAnimal {
  favouriteMeal: string
  weight: number
}

class Lion implements IFeline {
  favouriteMeal: string
  weight: number
  name: string
  constructor(){}

  speak(): void {
    console.log('Rawwwwww')
  }
}

// Generics
  function getLength<T>(arg: T): number {
    if(arg.hasOwnProperty("length")){
      return arg['length']
    }
    return 0
  }
  console.log("'5' length: ", getLength<number>(5))
  console.log("Hello length: ", getLength<string>("hello"))


