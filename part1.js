class MyClass{
    num1=10
    num2=20
    addTwo (){
        let sum=this.num1+this.num2
        console.log(sum)
    }
}

let obj1=new MyClass()
obj1.addTwo()
console.log(obj1.num2)