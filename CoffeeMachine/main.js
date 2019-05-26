var latte = {
    name: 'latte',
    waterNeeded: 80,
    beansNeeded: 20,
    milkNeeded: 40
};
var cappuccino = {
    name: 'cappuccino',
    waterNeeded: 100,
    beansNeeded: 20,
    milkNeeded: 20
};
var americano = {
    name: 'americano',
    waterNeeded: 100,
    beansNeeded: 15
};
var espresso = {
    name: 'espresso',
    waterNeeded: 100,
    beansNeeded: 25
};
var Water = /** @class */ (function () {
    function Water() {
    }
    Water.prototype.checkWaterAmount = function () {
        return this.waterAmount;
    };
    Water.prototype.addWater = function (amount) {
        this.waterAmount = amount;
    };
    return Water;
}());
var Beans = /** @class */ (function () {
    function Beans() {
    }
    Beans.prototype.checkBeansAmount = function () {
        return this.beansAmount;
    };
    Beans.prototype.addBeans = function (amount) {
        this.beansAmount = amount;
    };
    return Beans;
}());
var Milk = /** @class */ (function () {
    function Milk() {
    }
    Milk.prototype.checkMilkAmount = function () {
        return this.milkAmount;
    };
    Milk.prototype.addMilk = function (amount) {
        this.milkAmount = amount;
    };
    return Milk;
}());
var CoffeeMaker = /** @class */ (function () {
    function CoffeeMaker() {
        this.water = new Water();
        this.beans = new Beans();
        this.milk = new Milk();
    }
    CoffeeMaker.prototype.create = function (event) {
        if (this.water.waterAmount < event.waterNeeded) {
            console.log('You must add some water');
            return;
        }
        if (this.beans.beansAmount < event.beansNeeded) {
            console.log('You must add some beans');
            return;
        }
        if (this.milk.milkAmount < event.milkNeeded) {
            console.log('You must add some milk');
            return;
        }
        console.log("Your " + event.name + " is ready!");
        this.water.waterAmount -= event.waterNeeded;
        this.beans.beansAmount -= event.beansNeeded;
        event.milkNeeded ? this.milk.milkAmount -= event.milkNeeded : this.milk.milkAmount;
    };
    return CoffeeMaker;
}());
var myCoffeeMaker = new CoffeeMaker();
myCoffeeMaker.water.checkWaterAmount();
myCoffeeMaker.water.addWater(1000);
myCoffeeMaker.beans.addBeans(100);
myCoffeeMaker.milk.addMilk(100);
myCoffeeMaker.create(latte);
myCoffeeMaker.create(cappuccino);
myCoffeeMaker.create(latte);
console.log(myCoffeeMaker.milk.checkMilkAmount());
myCoffeeMaker.create(latte);
myCoffeeMaker.create(espresso);
myCoffeeMaker.create(latte);
console.log(myCoffeeMaker.water.checkWaterAmount());
console.log(myCoffeeMaker.beans.checkBeansAmount());
console.log(myCoffeeMaker.milk.checkMilkAmount());
