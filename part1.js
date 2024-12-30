class MyClass {
    num1 = 20
    num2 = 30
    addTwo() {
        let sum = this.num1 + this.num2
        console.log(sum)
    }
}

let obj1 = new MyClass()
obj1.addTwo()
console.log(obj1.num2)
