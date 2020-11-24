class Person{
    constructor(name="Anonymous",age=0){
        this.age=age;
        this.name=name;
    }
    getGretting(){
        return `Hi, my name is ${this.name}`;
    }
    getDescription(){
        return `${this.name} is ${this.age} years old`;
    }
}

class student extends Person{
    constructor(name,age,major){
            super(name,age);
            this.major=major;
    }
    hasMajor(){
        return this.major;
    }
    getDescription(){
        let description=super.getDescription();
        if(this.hasMajor()){
            description+=` Their major is ${this.major}`;
        }
        return description;
    }
}

class travelers extends Person{
    constructor(name,age,homelocation){
        super(name,age);
        this.homelocation=homelocation;
    }
    hashomelocation(){
        return this.homelocation;
    }
    getGretting(){
        let Gretting=super.getGretting();
        if(this.hashomelocation()){
            Gretting+=`I am visiting ${this.homelocation}`;
        }
        return Gretting;
    }
}

const me=new student("RAY ALLEN",28,"SOFTWARE ENGINEERING");
console.log(me.getDescription());

const other=new student();
console.log(other.getDescription());

const newtraveler=new travelers("ANDREW MEED",28,"FUSHUN")
console.log(newtraveler.getGretting());
