function Employee(name,age,position){
    var name = name;
    var age = age;
    var position = position;

    const objectToReturn = {
        name:name,
        age:age,
        position:position,
        isBoss:false
    }
    return objectToReturn;
};

let johnDoe = new Employee("john",40,"manager");
let janeDoe = new Employee("jane",35,"sysadmin");

console.log(johnDoe.age);
console.log(janeDoe.isBoss);

let companyMotto = "Lorem Ipsum";

for(let i=0;i<5;i++){
    console.log(companyMotto);
};