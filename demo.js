function Crop(name, health, value) {
  this.name = name;
  this.health = health;
  this.value = value;
  this.damage = function(damageDone){
    var tempHealth = this.health - damageDone;

    if(tempHealth > 0) {
    this.health = tempHealth;
    } else{
    this.health = 0;
    console.log("Now, you starve.");

    }
  };
  this.benefit = function(benefitGained){
    this.health = this.health + benefitGained;
  }
  };
  this.money = function(valueMultiplier){
    this.value = this.health + benefitGained, + this.health - damageDone * 200
  }

var Corn = new Crop("Corn", 100, 20000);
var Wheat = new Crop("Wheat", 100, 20000);
var potatoes = new Crop("Potatoes", 100, 20000);


function Farmer (fname, borrowed, money){
  this.name = name;
  this.borrowed = borrowed;
  this.money = function(moneyEarned){
    var tempMoney = this.borrowed - moneyEarned;
  };
}
var FarmerJohn = new Farmer("Farmer John", 20000, 55000);
var FarmerSam = new Farmer("Farmer Sam", 10000, 55000);
var FarmerWill = new Farmer("Farmer Will", 30000, 55000);

function badWeather(kind, damage) {
  this.kind = kind;
  this.damage = damage;
  this.change = function(Crop) {
    var randNum = Math.floor(Math.random() * 10);
    if(randNum > 5) {
      console.log("You've been hit by", kind);
      Crop.damage(this.damage);
    } else{
      console.log("The", kind, "missed ya!");
    }
  };

}

var drought = new badWeather("Drought", 60);
var flood = new badWeather("Flood", 30);
var fire = new badWeather("Fire", 90);
var locusts = new badWeather("Locusts", 100);

function cropRevive(kind, benefit) {
  this.kind = kind;
  this.benefit = benefit;
  this.change = function(Crop) {
    var randNum = Math.floor(Math.random() * 10);
    if(randNum > 5) {
      console.log("Yay! You just got", kind);
      Crop.benefit(this.benefit);
    } else{
      console.log("Too bad, you missed the", kind);
    }
  };
}

var rain = new cropRevive("Rain", 50);
var fertilizer = new cropRevive("Fertilizer", 20);
var sun = new cropRevive("Sun", 40);
