// Inheritance for cycle to motor cycle


class Cycle
{
    noOfWheels:number;
    noOfHandles:number;
    noOfSeats:number;
   
    constructor()
    {
        this.noOfWheels = 2;
        this.noOfHandles= 1;
        this.noOfSeats=1;
    }
    vehcileSpeed = function()
    {
        console.log("This cycle goes 20 kmph")
     
    }
    
}
class MotorCycle extends Cycle
{
  
}

let heroCycle = new Cycle()
heroCycle.vehcileSpeed()
console.log(`This cycle has ${heroCycle.noOfWheels} wheels`)
console.log(`This cycle has ${heroCycle.noOfHandles} handle`)
console.log(`This cycle has ${heroCycle.noOfSeats} seat`)


let starCity = new MotorCycle()
console.log("This motor cycle goes 40 kmph")
console.log(`This motor cycle has ${starCity.noOfWheels} wheels`)
console.log(`This motor cycle has ${starCity.noOfHandles} handle`)
console.log(`This motor cycle has ${starCity.noOfSeats} seat`)

// Inheritance for for features phone to smart phone
console.log("Inheritance for for features phone to smart phone")
class FeaturesPhone
{
    sizeOfPhone:string;
    weightOfPhone:string;
    meomeryStorageOfPhone:string;
    batteryPhone:string;

    constructor()
    {
        this.sizeOfPhone = "1.3inches";
        this.weightOfPhone="100gms";
        this.meomeryStorageOfPhone= "32GB";
        this.batteryPhone ="1200mAh "
    }
}
class SmartPhone extends FeaturesPhone
{

    
  constructor()
  {
      super()
  this.sizeOfPhone="6inches";
  this.weightOfPhone="300gms";
  this.meomeryStorageOfPhone= "128GB";
  this.batteryPhone ="5000mAh";
  }
}

let nokia = new FeaturesPhone()
console.log("The Nokia 5310 is a great basic phone for everyday use")
console.log(`The size of Nokia 5310 is ${nokia.sizeOfPhone} `)
console.log(`The weight of nokia is ${nokia.weightOfPhone}`)
console.log(`The storage of nokia phone is ${nokia.meomeryStorageOfPhone}`)
console.log(`The battery of nokia is ${nokia.batteryPhone}`)

let samsung = new SmartPhone ()
console.log("A mobile phone that performs many of the functions of a computer, typically having a touchscreen interface, internet access, and an operating system capable of running downloaded apps is called smart phone.")
console.log(`The size of samsung is ${samsung.sizeOfPhone} `)
console.log(`The weight of samsung is ${samsung.weightOfPhone}`)
console.log(`The storage of samsung phone is ${samsung.meomeryStorageOfPhone}`)
console.log(`The battery of samsung is ${samsung.batteryPhone}`)