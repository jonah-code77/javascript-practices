//THIS IS MY OBJECT PRACTICE

//HOW TO DECLARE AN OBJECT
/**
 * ROUGH WORK
 * THERE ARE BASCICALLY DIFFERENT WAYS TO DECLARE AND OBJECT
 * 
 * Using an Object Literal
 * Using the new Keyword
 * Using an Object Constructor
 * 
 * USING OBJECT LITERALS
 */

const car = {
    color:'Red',
    brand: 'Lamborghini urus',
    producer: function (){
        return this.brand
    }

};

console.log(car.producer());
console.log(Object.values(car));

// USING CONSTRUCTORS

function Car(){
    console.log('car initialized...');
}

//instance of an object--here we are using Car
const Lamborghini = new Car();

// USING CONSTRUCTORS
function Cars(brand,color,year){
    //Cars---is an object created using constructor
    this.brand = brand;
    this.color = color;
    this.year = year;
    this.producer = function(){
       return ` ${this.brand} in ${this.color} on ${this.year}`;
    }
}

//protoType..if we dont want our mehtod to be use in every object we create
Cars.prototype.producerr = function(){
    return ` ${this.brand} in ${this.color} on ${this.year}`;
}

//instance of an object
const toyotal = new Cars('camry','red','2010');
const lexus = new Cars('Rx350', 'black','2022');

console.log(toyotal);
console.log(toyotal.brand); 
console.log(toyotal.producerr());
console.log(lexus.producerr());
console.log(lexus);
console.log(toyotal)

Cars.prototype.getYears = function(){
    const years = new Date().getFullYear() - this.year;
    return `${this.brand} is ${years} year old`
}

console.log(lexus.getYears());
console.log(lexus)

Cars.prototype.reviseYear = function(newYear){
    this.year = newYear;
    this.reviseYears = true
}


lexus.reviseYear('2023')
console.log(lexus)

//INHERITANCE
Cars.prototype.producer = function(){
    return ` ${this.brand} in ${this.color} on ${this.year}`;
}
 
function Rozz(brand,color,year,month){
    Cars.call(this,brand,color,year);
    this.month = month;
}

//inherit prototype
Rozz.prototype = Object.create(Cars.prototype);
//instantiate
const zoo = new Rozz('ferari','green','2022','jan');
console.log(zoo);
console.log(zoo.producer());


//object protoTypes

const carProto = {
    getYear:function(){
        return `
        ${this.brand} was designed by john in 
        ${this.year} and he made it color:${this.color}
        `;
    },
    getDate: function(){
        const years = new Date().getFullYear() - this.year;
        return `
        ${this.brand} is ${years} old
        `;   
    }
};
//create the object---1 way of creating an object using protoTypes
const car2 = Object.create(carProto);
car2.brand = 'benz';
car2.color = 'black';
car2.year = '2020';

console.log(car2);
//create the object---second way of creating an object using protoTypes
const car3 = Object.create(carProto,{
    brand:{value: 'bently'},
    color:{value:'yellow'},
    year:{value:'2021'}
});
console.log(car3);


//USING CLASS
class Car1{
    constructor(brand,color,year){
        this.brand = brand;
        this.color = color;
        this.year = year;
    }

    producer(){
       return  `${this.year} and he made it color:
         ${this.color}
        `;
    }

    static topCar(){
        return 'vehicle';
    }
};

//subclass
//also know as child class
class Suv extends Car1 {
    constructor(brand,color,year,month){
        super(brand,color,year);
        this.month = month;
    }
};

const jeep = new Car1('urus','blue','2021');
console.log(jeep);
console.log(Car1.topCar())
const suv1 = new Suv('camry2','red','2022','jan');
console.log(suv1);
console.log(suv1.producer());