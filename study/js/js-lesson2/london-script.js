// used in london.html

function listAllChildren(){
    var i = 0;
    var children = document.body.childNodes;
    
    for(i=0; i < children.length; i++){
        console.log(children[i]);
        
    }
    
}
//function listInBrowser(){
//    var  = document
//
//}

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

function addInfoLondon() {
    var population = document.createElement("p");
    var content = document.createTextNode("Population: " + london.population);
    population.appendChild(content);
    document.body.appendChild(population);

    var universities = document.createElement("p");
    var content = document.createTextNode("Number of universities: " + london.numberOfUniversities);
    universities.appendChild(content);
    document.body.appendChild(universities);

    var rent = document.createElement("p");
    var text = document.createTextNode("The average rent is: " + london.averageRent);
    rent.appendChild(text);
    document.body.appendChild(rent);

    var building = document.createElement("p");
    var text = document.createTextNode("The tallest building is "+london.tallestBuilding.name + ". It's "+london.tallestBuilding.height+" height.")
    building.appendChild(text);
    document.body.appendChild(building);
    
    var olympics = document.createElement("p");
    var node = document.createTextNode("Olympics were in: " + london.olympics);
    olympics.appendChild(node);
    document.body.appendChild(olympics);

}

function addPopulation(){
var population = document.createElement("p");
var content = document.createTextNode("Population: "+ london.population);
population.appendChild(content);
document.body.appendChild(population);
}

 function addNumberOfUnis(){
     
     var universities = document.createElement("p");
     var content = document.createTextNode("Number of universities: "+ london.numberOfUniversities);
     universities.appendChild(content);
     document.body.appendChild(universities);
 }
function addAverageRent(){
    
    var rent = document.createElement("p");
    var text = document.createTextNode("The average rent is: " + london.averageRent);
    rent.appendChild(text);
    document.body.appendChild(rent);
}

function addTallestBuilding(){
    var building = document.createElement("p");
    var text = document.createTextNode("The tallest building is "+london.tallestBuilding.name + ". It's "+london.tallestBuilding.height+" height.")
    building.appendChild(text);
    document.body.appendChild(building);
}

function addDailyTubePassengerJourney(){
    var dailyTubePassengerJourney = document.createElement("p");
    var text = document.createTextNode("Daily Tube Passenger Journey: "+london.dailyTubePassengerJourney);
    dailyTubePassengerJourney.appendChild(text);
    document.body.appendChild(dailyTubePassengerJourney);
}
function addOlympics(){
    var olympics = document.createElement("p");
    var node = document.createTextNode("Olympics were in: " + london.olympics);
    olympics.appendChild(node);
    document.body.appendChild(olympics);
    
}
var names = [ "Jane", "Barry", "Helen", "David", "Sam" ];

names.sort();

function addNames(){
    var title = document.createElement("p");
    var text = document.createTextNode("Nice names are:");
    title.appendChild(text);
    document.body.appendChild(title);
    
    for(var i = 0; i<names.length;i++){
        var name = document.createElement("li");
        var text = document.createTextNode(names[i]);
        name.appendChild(text);
        document.body.appendChild(name);
    }

}