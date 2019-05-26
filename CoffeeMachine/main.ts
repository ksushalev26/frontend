interface TypeOfCoffee { 
    name: string,
    waterNeeded: number,
    beansNeeded: number,
    milkNeeded?: number                
}

const latte: TypeOfCoffee = {
    name: 'latte',
    waterNeeded: 80,
    beansNeeded: 20,
    milkNeeded: 40
};

const cappuccino: TypeOfCoffee = {
    name: 'cappuccino',
    waterNeeded: 100,
    beansNeeded: 20,
    milkNeeded: 20    
};

const americano: TypeOfCoffee = {
    name: 'americano',
    waterNeeded: 100,
    beansNeeded: 15        
};

const espresso: TypeOfCoffee = {
    name: 'espresso',
    waterNeeded: 100,
    beansNeeded: 25      
};

class Water {
    waterAmount: number = 0;
    checkWaterAmount() {
        return this.waterAmount;
    }

    addWater(amount: number): void {
        this.waterAmount = amount;
    }    
}

class Beans {
    beansAmount: number = 0;
    checkBeansAmount() {
        return this.beansAmount;        
    }

    addBeans(amount: number): void {
        this.beansAmount = amount;
    }
}

class Milk {
    milkAmount: number = 0;
    checkMilkAmount() {
        return this.milkAmount;        
    }

    addMilk(amount: number): void {
        this.milkAmount = amount;
    }
}

class CoffeeMaker {    
    public water: Water = new Water();   
    public beans: Beans = new Beans();
    public milk: Milk = new Milk();
    
    create(event: TypeOfCoffee): void {
        if (this.water.waterAmount < event.waterNeeded) {
            console.log('You must add some water')
            return;
        }
        if (this.beans.beansAmount < event.beansNeeded) {
            console.log('You must add some beans')
            return;                    
        }
        if (this.milk.milkAmount < event.milkNeeded) {
            console.log('You must add some milk')
            return;                    
        }

        console.log(`Your ${event.name} is ready!`);
        this.water.waterAmount -= event.waterNeeded;
        this.beans.beansAmount -= event.beansNeeded;
        event.milkNeeded ? this.milk.milkAmount -= event.milkNeeded : this.milk.milkAmount;
    }
}

let myCoffeeMaker = new CoffeeMaker();
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