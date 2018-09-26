enum Size {
    TALL = 'Tall',
    GRANDE = 'Grande',
    VENTI = 'Venti'
}

abstract class Beverage {
    _description: string;
    _cost: number;
    _size: Size;
    getDescription(): string {
        return this._size + ' ' + this._description;
    }
    getSize(): Size {
        return this._size;
    }
    getCost(): number {
        return this._cost;
    };
}

abstract class BasicBeverage extends Beverage {
    constructor(size: Size) {
        super();
        this._size = size;
    }
}

class HouseBlend extends BasicBeverage {
    constructor(size: Size) {
        super(size);
        this._cost = 1.25;
        this._description = 'HouseBlend';
    }
}

class DarkRoast extends BasicBeverage {
    constructor(size: Size) {
        super(size);
        this._cost = 1.4;
        this._description = 'DarkRoast';
    }
}

class Espresso extends BasicBeverage {
    constructor(size) {
        super(size);
        this._cost = 1.3;
        this._description = 'Espresso';
    }
}

class Decaf extends BasicBeverage {
    constructor(size) {
        super(size);
        this._cost = 1.35;
        this._description = 'Decaf';
    }
}

abstract class CondimentDecorator extends Beverage {
    _beverage: Beverage;

    constructor(beverage: Beverage) {
        super();
        this._beverage = beverage;
    }
    getDescription(): string {
        return this._beverage.getDescription() + ' ' +  this._description;
    }
    getCost(): number {
        return (this._beverage.getCost() + this._cost);
    }
}

class Milk extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super(beverage);
        this._cost = 0.6;
        this._description = 'Milk';
    }
}

class Mocha extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super(beverage);
        this._cost = 0.6;
        this._description = 'Mocha';
    }
}

class Soy extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super(beverage);
        this._cost = 0.5;
        this._description = 'Soy';
    }
}

class Whip extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super(beverage);
        this._cost = 0.1;
        this._description = 'Whip';
    }
}

class BevaragePrinter {
    static print(beverage: Beverage) {
        console.log(beverage.getDescription() + ': ' + beverage.getCost().toFixed(2));
    }
}

export class Decorator {
    private constructor() {}
    static run() {
        const grandeHouseBlend = new HouseBlend(Size.GRANDE);
        const tallDarkRoast = new DarkRoast(Size.TALL);
        const tallEspresso = new Espresso(Size.TALL);
        const ventiDecaf = new Decaf(Size.VENTI);

        const ventiDecafWithMilkAndSoy = new Soy(new Milk(ventiDecaf));
        const tallEpressoWithMilk = new Milk(tallEspresso);
        const ventiDecafMocha = new Mocha(ventiDecaf);

        BevaragePrinter.print(grandeHouseBlend);
        BevaragePrinter.print(tallDarkRoast);
        BevaragePrinter.print(tallEspresso);
        BevaragePrinter.print(ventiDecaf);
        BevaragePrinter.print(ventiDecafWithMilkAndSoy);
        BevaragePrinter.print(tallEpressoWithMilk);
        BevaragePrinter.print(ventiDecafMocha);
    }
}