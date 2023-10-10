// Celsiud to Fahrenheit:-
// F = 1.8C + 32;

function toFahrenheit(celsius) {
  
    convertCelsius = 1.8*celsius + 32;
    
    return convertCelsius.toFixed(2)+"F";
};
  
console.log(toFahrenheit(12.2823));
  

// Fahrenheit to Celsius:-
// C = (F - 32)/1.8;

function toCelsius(Fahrenheit) {
  
  convertFahrenheit = (Fahrenheit - 32)/1.8;
  
  return convertFahrenheit.toFixed(2)+"C";
};

console.log(toCelsius(152.989576))