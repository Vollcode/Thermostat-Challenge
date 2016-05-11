function Thermostat(temperature=20){
  this.temperature = temperature;
  this.powerSaving = true;
}

Thermostat.prototype.tempUp = function(number) {
  this.temperature += number;
  if (this.temperature > 25 && this.powerSaving === true){
    throw new Error("Too hot bro!");
  }
  if (this.temperature > 32 && this.powerSaving === false){
    throw new Error("Too hot bro!");
  }
};
Thermostat.prototype.tempDown = function(number) {
  this.temperature -= number;
  if (this.temperature < 10){
    throw new Error("Too cold bro!");
  }
};
Thermostat.prototype.resetButton = function() {
  this.temperature = 20;
};
Thermostat.prototype.powerSavingOff = function() {
  this.powerSaving = false;
};
Thermostat.prototype.powerSavingOn = function() {
  this.powerSaving = true;
};
Thermostat.prototype.energyColour = function() {
  if(this.temperature > 25) {
    return 'red';
  } else if (this.temperature < 18) {
    return 'green';
  } else {
    return 'yellow';
  }
};
