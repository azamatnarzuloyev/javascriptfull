'use strict';




const measureKelvin = function() {
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        value: prompt("Degrees celsius"),
    }
console.log(measurement.value);
// console.error(measurement.value)
// console.warn(measurement.value)
const kelvin =  measurement.value+273;
 return kelvin ;
};

console.log(measureKelvin()) ;


console.log();
console.log('first', first)











