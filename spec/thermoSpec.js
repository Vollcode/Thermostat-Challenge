describe('Thermostat', function(){

  beforeEach(function(){
    thermo = new Thermostat();
  });

  it('should start at 20 degrees', function(){
    expect(thermo.temperature).toEqual(20);
  });
  it('gives an error when temperature is sub 10', function(){
    expect(function(){
      thermo.tempDown(15);
    }).toThrowError("Too cold bro!");
  });
  it('gives an error when temperature is over 25 and power save is on', function(){
    expect(function(){
      thermo.tempUp(15);
    }).toThrowError("Too hot bro!");
  });
  it('gives an error when temperature is over 32 and power save is off', function(){
    thermo.powerSavingOff();
    expect(function(){
      thermo.tempUp(20);
    }).toThrowError("Too hot bro!");
  });
  describe('power saving', function(){
    it('is on by default', function(){
      expect(thermo.powerSaving).toEqual(true);
    });
    it('can be set to off', function(){
      thermo.powerSavingOff();
      expect(thermo.powerSaving).toEqual(false);
    });
    it('can be set to on again', function(){
      thermo.powerSavingOn();
      expect(thermo.powerSaving).toEqual(true);
    });
  });

  describe('buttons', function(){
    it('has an temp up button', function(){
      thermo.tempUp(5);
      expect(thermo.temperature).toEqual(25);
    });
    it('has a temp down button', function(){
      thermo.tempDown(10);
      expect(thermo.temperature).toEqual(10);
    });
    it('has a reset button', function(){
      thermo.tempUp(5);
      thermo.resetButton();
      expect(thermo.temperature).toEqual(20);
    });
  });
  describe('Thermostat has a colour display based on energy usage', function(){
    it('it will be colored green when temperature is sub 18',function(){
      thermo.tempDown(10);
      expect(thermo.energyColour()).toEqual('green');
    });
    it('it will be colored yellow when temperature is over 18 and sub 25',function(){
      expect(thermo.energyColour()).toEqual('yellow');
    });
    it('it will be colored red when temperature is over 25',function(){
      thermo.powerSavingOff();
      thermo.tempUp(10);
      expect(thermo.energyColour()).toEqual('red');
    });
  });
});
