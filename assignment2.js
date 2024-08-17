const addTwoNumber = (a,b) => a+b;
console.log(addTwoNumber(2,3));//two number added using arrow function

//create a student object

const student = {
    name : 'Harish',
    age : 31,
    greet(){
        console.log('Hi, I am ' + this.name + ' my age is ' + this.age);
    }
};
student.greet();