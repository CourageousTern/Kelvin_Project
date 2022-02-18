var kelvin = 0
// This is telling the engine "I wish for there to be a variable named kelvin, and I wish for the value of kelvin to be 293"
var celcius = (kelvin - 273)
// This is telling the engine "I wish for there to be a variable named celcius, and I wish for the value of celcius to be the value of the variable kelvin minus 273"
var fahrenheit = (celcius * (9 / 5) + 32)
// This is telling the engine "I wish for there to be a variable named fahrenheit, and I wish for the value of fahrenheit to be the value of celcius multiplied by the quotient of nine over five, then add 32"
fahrenheit = (Math.floor(fahrenheit))
// This is telling the engine "At this point in the code, I wish for the variable fahrenheit to be changed to the value of fahrenheit rounded to the nearest whole number."
console.log(`the temperature today is ${fahrenheit} degrees`)
var newton = (celcius * (33 / 100))
newton = (Math.floor(newton))
console.log(newton)
