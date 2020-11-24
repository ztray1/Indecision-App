var nameVar="allen";
nameVar="Mike";
console.log("nameVar",nameVar);

let nameLet="Jen"; 
console.log("nameLet",nameLet);

const fullname="RAY ALLEN";
let firstname;



const getFirstName=(fullname)=>fullname.split(" ")[0];

console.log(getFirstName("RAY ALLEN"));

const nameContent="Frank";
console.log("nameContent",nameContent);

const multiplier={
    numbers:[1,2,3],
    multiplyBy:2,
    multiply(){
        return this.numbers.map((number)=>number*this.multiplyBy)
    }
}

console.log(multiplier.multiply());
