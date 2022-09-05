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

// const jonasArray = [
//     'azamat',
//     'Narzulloyev',
//     2020-1996,
//     'teacher',
//     ['Hasan', 'Azizbek','Ali']
// ];

// const jones  = {
//     firtname : 'Asilbek',
//     Lasname: 'Narzulloyev',
//     age: 2003,
//     friends : ['Hasan', 'Azizbek','Ali']
// }



// console.log(jones)



// console.log(jones.Lasname)
// console.log(jones['friends'])
// const nameKey = 'Name';
// console.log(jones['first'+ nameKey])
// console.log(jones['last'+ nameKey])


// const interested = prompt('What do you want to ');
// // console.log(jones[interested]);

// if(jones[interested]) {
//     console.log(jones[interested])
// }
// else {
//     console.log('wrong request! ')
// }

// jones.location = 'uzbekistan';
// jones['twitter'] = 'azamat1796';
// console.log(jones)


//44-dars

// const jones  = {
//     firtname : 'Asilbek',
//     Lasname: 'Narzulloyev',
//     jop: 'programmer',
//     birthyear: 1996,
//     friends : ['Hasan', 'Azizbek','Ali'],
//     hasDriver: true,

//     // calcAge : function(birthyear) {
//     //     return 2022-birthyear
//     // }



//     // calcAge : function() {
//     //     console.log(this.Lasname)
//     //     return 2022-this.birthyear
//     // }


//     calcAge : function() {
//         console.log(this)
//        this.age = 2022-this.birthyear
//        return this.age
//     },

//     getSummary: function() {
//         return `${this.firtname} is a ${this.calcAge()}`
//     }


// }

// // console.log(jones.calcAge())
// // console.log(jones.age)

// console.log(jones.getSummary())


//45-dars 



// const mark = {
//     fullName: 'Azamat narzulloyev',
//     mass: 65,
//     height: 1.69,
//     calcBMI: function() { 
//         this.bmi=this.mass/this.height**2
//         return this.bmi
//     }
// };

// const john = {
//     fullname: 'Jon Smith',
//     mass: 92,
//     height:1.76,
// };
// mark.calcBMI();
// console.log(mark.bmi)



//46-dars 

//for loops keeps running while condition is true


// for(let rep=1; rep<=10; rep+=1)
// console.log(`for loops keeps running ${rep}`)



// for (n=1; n<15; n+=2){
//     console.log(`foor loops ${n}`)
// }


// 47-dars 
 
// const jonasArray = [
//     'Jonas',
//     'Peter',
//     'Salim',
//      1996,
//      'hasan',
//     '1996 - 1995',
//     'programmer',
//     ['mark','jones','superberk']
// ]

// for (n=0; n<jonasArray.length; n+=1) {
//     if (jonasArray[n].length>0) {
//         console.log(jonasArray[n])
//     }
//     else {
//         for (m=0; m<jonasArray[n].length; m+=1) {
//             console.log(jonasArray[m])
//         }
//     }
// }


// const types = []
// for (let i=0; i<jonasArray.length ; i++) {
//     console.log(jonasArray[i], typeof jonasArray[i])



//     types.push(typeof jonasArray[i])
// };
// console.log(types)



// const years = [1991,2001, 2007,1995, 1993]

// const ages =[]

// for (let i=0; i<years.length; i++) {
//     ages.push(2037-years[i]);

// }

// for (let i=0; i<jonasArray.length; i++) {
//     if (typeof jonasArray[i] !=='string') continue;
//     console.log(jonasArray[i], typeof jonasArray[i])
// }




// for (let i=0; i<jonasArray.length; i++) {
//     if (typeof jonasArray[i] !=='string') break;
//     console.log(jonasArray[i], typeof jonasArray[i])
// }

// console.log("break agar dasturga shart bajarilmasa chiqadi ")



// 48-dars 


// const jonasArray = [
//     'Jonas',
//     'Peter',
//     'Salim',
//      1996,
//      'hasan',
//     '1996 - 1995',
//     'programmer',
//     ['mark','jones','superberk']
// ]

// for (let i=jonasArray.length-1; i>=0; i-=1) {
//     console.log(jonasArray[i])
// }

// for (let exercise=1; exercise<4; exercise+=1) {
//     console.log(`starting exercises ${exercise}`)


//     for (let rep=1; rep<6; rep+=1) {
//         console.log(`Lifting weight repetition ${rep}`)
//     }
// }


//49-dars 



// for(let rep=1; rep<=10; rep+=1) {
//     console.log(`Lifting weights repetition ${rep}`)
// }




// rep=1;
// while (rep<=10) {
//     console.log(`Lifting weights repetition ${rep}`);
//     rep++;
// }

// let dice = Math.trunc(Math.random()*6)+1
// console.log(dice);



// 50-dars 


const calcTip = function(bill) {
    return bill >=50 && bill <=300 ? bill*0.15: bill*2
}
const bills = [20,55,44,33 , 222, 33, 44, 555,5555]


// for (let i=0; i<bills.length; i+=1) {
//     console.log(calcTip(bills[i]))
// }


const tips = []
const totals = [] 
for (let i=0; i< bills.length; i+=1) {
   const  tip = calcTip(bills[i]);
   tips.push(tip)
   totals.push(tip+bills[i])
}
console.log(tips)
console.log(totals)

const calcAverage = function(arr) {
    let sum = 0;
    for(let i=0; i<arr.length; i+=1) {
        // sum = sum+arr[i]
        sum += arr[i] ;
    }
    // console.log(sum);
    return sum;
}



console.log(calcAverage([2, 4, 6])) 
























