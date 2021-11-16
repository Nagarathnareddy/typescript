// Inheritance for cycle to motor cycle
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Cycle = /** @class */ (function () {
    function Cycle() {
        this.vehcileSpeed = function () {
            console.log("This cycle goes 20 kmph");
        };
        this.noOfWheels = 2;
        this.noOfHandles = 1;
        this.noOfSeats = 1;
    }
    return Cycle;
}());
var MotorCycle = /** @class */ (function (_super) {
    __extends(MotorCycle, _super);
    function MotorCycle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MotorCycle;
}(Cycle));
var heroCycle = new Cycle();
heroCycle.vehcileSpeed();
console.log("This cycle has " + heroCycle.noOfWheels + " wheels");
console.log("This cycle has " + heroCycle.noOfHandles + " handle");
console.log("This cycle has " + heroCycle.noOfSeats + " seat");
var starCity = new MotorCycle();
console.log("This motor cycle goes 40 kmph");
console.log("This motor cycle has " + starCity.noOfWheels + " wheels");
console.log("This motor cycle has " + starCity.noOfHandles + " handle");
console.log("This motor cycle has " + starCity.noOfSeats + " seat");
// Inheritance for for features phone to smart phone
console.log("Inheritance for for features phone to smart phone");
var FeaturesPhone = /** @class */ (function () {
    function FeaturesPhone() {
        this.sizeOfPhone = "1.3inches";
        this.weightOfPhone = "100gms";
        this.meomeryStorageOfPhone = "32GB";
        this.batteryPhone = "1200mAh ";
    }
    return FeaturesPhone;
}());
var SmartPhone = /** @class */ (function (_super) {
    __extends(SmartPhone, _super);
    function SmartPhone() {
        var _this = _super.call(this) || this;
        _this.sizeOfPhone = "6inches";
        _this.weightOfPhone = "300gms";
        _this.meomeryStorageOfPhone = "128GB";
        _this.batteryPhone = "5000mAh";
        return _this;
    }
    return SmartPhone;
}(FeaturesPhone));
var nokia = new FeaturesPhone();
console.log("The Nokia 5310 is a great basic phone for everyday use");
console.log("The size of Nokia 5310 is " + nokia.sizeOfPhone + " ");
console.log("The weight of nokia is " + nokia.weightOfPhone);
console.log("The storage of nokia phone is " + nokia.meomeryStorageOfPhone);
console.log("The battery of nokia is " + nokia.batteryPhone);
var samsung = new SmartPhone();
console.log("A mobile phone that performs many of the functions of a computer, typically having a touchscreen interface, internet access, and an operating system capable of running downloaded apps is called smart phone.");
console.log("The size of samsung is " + samsung.sizeOfPhone + " ");
console.log("The weight of samsung is " + samsung.weightOfPhone);
console.log("The storage of samsung phone is " + samsung.meomeryStorageOfPhone);
console.log("The battery of samsung is " + samsung.batteryPhone);
