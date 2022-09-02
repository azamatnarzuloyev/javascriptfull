// 'use strict';
// let hasdriv = false;
// const passtest =  true;

// if(passtest) hasdriv = true;
// if (hasdriv) console.log(" i can drive")

// // const interface = 'Audio';
// const book =true

//----------------------------------------------


// function logger() {
//     console.log('My name is Azamat')
// }
// // calling / running / inworking funtion 

// logger();


// function fruitProtcesor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = 'Juiese with ${apples} apples and ${oranges} oranges.';
//     return juice
// }

// // fruitProtcesor(5,0)
// const applesJuice  = fruitProtcesor(5,0)
// console.log(applesJuice)


// const num = Number('23');

//----------------------------------------------------
// //funtion declaration
// function callAge(birthyear) {
//     const age = 2022 - birthyear;
//     return age ;
// }

// const age1 = callAge(1996)

// //funtion  expression 
// const callAge2 = function(birthyear) {
//     return 2022-birthyear
// }
// const age2 =  callAge2(1995)
// console.log(age2,age1)

//---------------------------------

// Arrow funtion 

// const callAge3 = birthyear => 2022-birthyear;
// const age3 = callAge3(1996);
// console.log(age3)

// const yearUntilRetiremnt = (birthyear ,firsname)=> {
//     const age = 2022-birthyear;
//     const retirment = 65-age 
//     console.log(firsname, age)
 
// }


// console.log(yearUntilRetiremnt(1996,'azamat')) ;

//-----------------------------------------

// function cutfruitpieces(fruit) {
//     return fruit * 4 ;
// }

// function fruitProtcesor(apples, oranges) {
//     const applepieces = cutfruitpieces(apples);
//     const orangepices  = cutfruitpieces(oranges);
//     console.log(applepieces,orangepices)
// }

// fruitProtcesor(1,2)
// const callAge = function(birthyear) {
//     return 2022 - birthyear;
// }


// const yearUntilRetiremnt = (birthyear ,firsname)=> {
//     const age = callAge(birthyear);
//     const retirm = 28-age
//     if (retirm>0) {
//         return age;
//     }
//     else {
//         return -1;
//     }
// }

// console.log(yearUntilRetiremnt(1990, 'azamat'))




//-------------------------------------------------


// const calcAverage = (a,b,c) => (a+b+c) /3 ; 

// // console.log(calcAverage(3,4,5)) ;

// const scoreDol = calcAverage(4,5,6);
// const scoreKoales = calcAverage(4,6,7)





// const checkWinner = function(args, kwargs) {
//     if(args>=kwargs) {
//         console.log(args)
//     }
//     else if(kwargs>args) {
//         console.log(kwargs)
//     }

//     else {
//         console.log("messeg arror ")
//     }
// }



// console.log(checkWinner(scoreDol, scoreKoales))

//--------------------------------------------



// const friend1 = 'Hasan';
// const friend2  = 'Azizbek';
// const frield3 =  'Ali';


// const friends  = ['Hasan', 'Azizbek','Ali']


// console.log(friends)

// const year  = new Array (1991,1965,1999, 1995);


// // console.log(friends[0]);
// // console.log(friends.length)
// console.log(friends[friends.length-3])

// friends[2]= 'Jay';
// console.log(friends)


// const firsname =['Azamat', 'bahodir'];

// const jonas = [firsname, 'Valijon', 466, friends]

// console.log(jonas)

// console.log(jonas.length)



// const callAge = function(birthyear) {
//     return 2022- birthyear
// }

// const years =  [1990, 1967, 2002, 2010, 2018];

// // callAge(years);

// const age1 = (callAge(years[1]))

// console.log(age1)


//40-dars 

// const friends  = ['Hasan', 'Azizbek','Ali'];

// //addelement 
// const newlength = friends.push('Jaye');

// friends.unshift('Jaye')

// // console.log(newlength);
// console.log(friends)

//remove element 

// friends.pop(); 
// const popped = friends.pop()
// console.log(friends)
// console.log(popped)
// console.log(friends)


// friends.shift() //first element remove 
// console.log(friends)

// console.log(friends.indexOf('Hasan'))
// console.log(friends.indexOf('Azizbek'))

// console.log(friends.includes('Hasan'))

// if(friends.includes('Hasan')) {
//     console.log("bu malumot bor")
// }
// else {
//     console.log("bu malumot yoq ")
// }


//41-dars 

// const calckTip = function(bill) {
//     return bill >= 50 && bill <=300 ? bill *0.15: bill+0.2;
// }
// // console.log(calckTip(1))

// const bills = [125, 200, 75]
// const tip  = [calckTip(bills[0]), calckTip(bills[1]), calckTip(bills[2])]

// const tatals = [bills[0] + tip[0], bills[1] + tip[1],bills[2] + tip[2]] 
// console.log(tatals)
// console.log(bills)
// console.log(tip)


//42-dars 

const jonasArray = [
    'azamat',
    'Narzulloyev',
    2020-1996,
    'teacher',
    ['Hasan', 'Azizbek','Ali']
];

const jones  = {
    firtname : 'Asilbek',
    Lasname: 'Narzulloyev',
    age: 2003,
    friends : ['Hasan', 'Azizbek','Ali']
}



// console.log(jones)



// console.log(jones.Lasname)
// console.log(jones['friends'])
const nameKey = 'Name';
console.log(jones['first'+ nameKey])
console.log(jones['last'+ nameKey])


// const interested = prompt('What do you want to ');
// // console.log(jones[interested]);

// if(jones[interested]) {
//     console.log(jones[interested])
// }
// else {
//     console.log('wrong request! ')
// }

jones.location = 'uzbekistan';
jones['twitter'] = 'azamat1796';
console.log(jones)

