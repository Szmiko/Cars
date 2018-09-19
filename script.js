/* first constructor
function Car(make, model, year, color, passangers, convertible, mileage) {
	this.make = make;
	this.model = model;
	this.year = year;
	this.color = color;
	this.passangers = passangers;
	this.convertible = convertible;
	this.mileage = mileage;
	this.started = false;

	this.start = function () {
		this.started = true;
	};
	this.stop = function() {
		this.started = false;
	};
	this.drive = function() {
		if (this.started) {
			alert("Brum wrrr!");
		} else {
			alert("Włacz silnik!");
		}
	};
};
*/


/*
var ford = {Ford, "Focus", 2005, "blue", 5, false, 10200};
var vw = new Car("Volkswagen", "Polo", 2010, "green", 5, false, 5400);
var citroen = new Car("Citroen", "C3", 2014, "white", 4, false, 2300);
var honda = new Car("Honda", "Jazz", 2008, "black", 4, false, 6800);
var testCar = new Car("SAM", "Test", 2018, "pink", 2, true, 15);

var allCars = [ford, vw, citroen, honda, testCar];

for (var i = 0; i < allCars.length; i++) {
	allCars[i].start();
	allCars[i].drive();
	allCars[i].stop();
};*/

// Constructor modification

var cadiParams = {make: "GM",
					model: "Cadillac",
					year: 1955,
					color: "yellow",
					passangers: 5,
					convertible: false,
					mileage: 12892};

var cadi = new Car(cadiParams);

function Car(params) {
	this.make = params.make;
	this.model = params.model;
	this.year = params.year;
	this.color = params.color;
	this.passangers = params.passangers;
	this.convertible = params.convertible;
	this.mileage = params.mileage;
	this.started = false;

	this.start = function() {
		this.started = true;
	};
	this.stop = function() {
		this.started = false;
	};
	this.drive = function() {
		if (this.started) {
			alert("Brum wrrr!");
		} else {
			alert("Najpierw musisz włączyć silnik.");
		}
	};
};