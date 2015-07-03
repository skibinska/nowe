// used in lesson2.html

//var i = 1;
//var total = 0;
//while (i<= 10) {
 //   total += i;
  //  i++;
//}
//console.log("Total: "+ total);
var animals = [ "dog", "cat", "rabbit", "horse", "elephant", "monkey" ];
animals.push("zebra");
animals.unshift("cow");
//console.log(animals.length);
var i;
for(i=0; i<animals.length; i++){
    var animal = animals[i];
    //console.log(animal);
}
//console.log(animals);

var names = [ "Jane", "Barry", "Helen", "David", "Sam" ];

names.sort();
//console.log(names);

function sortNrAsc(a,b){
    return a - b;
}
var nr = [1, 10, 7, 5, 2, 6, 123];
nr.sort(sortNrAsc);
//console.log(nr);

animals.sort().reverse();
//console.log(animals);

function sortNrDsc(a,b){
    return b - a;
}
nr.sort(sortNrDsc);
//console.log(nr);

nr.sort(sortNrAsc).reverse();
//console.log(nr);

var fruitAndVeg = [ "apple", "orange", "banana", "kiwi", "avocado", "celery", "aubergine" ];
var noAvocados = [];
var i = 0;
 
for(i=0;i < fruitAndVeg.length; i++){
    if(fruitAndVeg[i] !== "avocado"){
        noAvocados.push(fruitAndVeg[i]);
    }
}
console.log(noAvocados);

var message = "It is sunny today!:)";
console.log(message.length);
console.log(message.toUpperCase());


var london = {
    name: "London",
    population: 8308369,
    tallestBuilding: {
        name:  "Shard",
        height: "310m"
    },
    numberOfUniversities: 43,
    averageRent: 1106,
    dailyTubePassengerJourney: 3500000,
    olympics: [ 1908, 1948, 2012],
    updatePopulation: function(newPopulation) {
        this.population = newPopulation;
    }
};

console.log("Number of Unis : " + london.numberOfUniversities);
console.log("The heightes building is " + london.tallestBuilding.name);

var i =0;
console.log("The olympics took place in London in:\n");
for(i=0; i<london.olympics.length; i++){
 console.log(london.olympics[i]);
}

console.log("Population before update: " + london.population);
london.updatePopulation(78);
console.log("Population after update: " + london.population);