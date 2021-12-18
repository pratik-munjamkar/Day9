//Solving problems using array functions on rest countries data.
var req=new XMLHttpRequest;
req.open('GET','https://restcountries.eu/rest/v2/all',true);
req.send();
req.onload=function(){
    var data=JSON.parse(req.responseText);
    var data=JSON.parse(req.responseText);

   //a. Get all the countries from Asia continent /region using Filter function
console.log("------ASIAN COUNTRIES------");
    var region=data.filter((element)=>element.region==="Asia");
        console.log(region);
//b. Get all the countries with a population of less than 2 lakhs using Filter function
console.log("------countries less than 2lakhs population------");
var population=data.filter((element)=>element.population<200000);
console.log(population);

//c. Print the total population of countries using reduce function
console.log("------total populaton------");
var totalPopulation=data.reduce((acc,ele)=>acc+ele.population,0)
console.log(totalPopulation); 

//d. Print the country which uses US Dollars as currency.
console.log("------countries using US dollars------");
let dollar=data.filter((element)=>{
for (let i in element.currencies) {
if(element.currencies[i].code==='USD'){
    return true;
}
}
});
console.log(dollar);
//e. Print the following details name, capital, flag using forEach function
console.log("------forEach------");
data.forEach((element)=>{console.log(` ${element.name} ${element.capital} ${element.flag}`)})


}