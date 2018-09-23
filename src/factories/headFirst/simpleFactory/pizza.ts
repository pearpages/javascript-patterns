export class SimpleFactory {
    private constructor() {}
    static run() {
        const store = new PizzaStore(new SimplePizzaFactory());
        const cheesePizza = store.orderPizza(PizzaType.CHEESE);
        const veggiePizza = store.orderPizza(PizzaType.VEGGIE);
        cheesePizza.getDescription();
        veggiePizza.getDescription();
    }
}

enum PizzaType {
    CHEESE = 'Cheese',
    VEGGIE = 'Veggie',
    CLAM = 'Clam',
    PEPPERONI = 'Pepperoni'
}

class PizzaStore {
    private _simplePizzaFactory: SimplePizzaFactory;
    constructor (simplePizzaFactory: SimplePizzaFactory) {
        this._simplePizzaFactory = simplePizzaFactory;
    }
    orderPizza(pizzaType: PizzaType): Pizza {
        return this._simplePizzaFactory.createPizza(pizzaType);
    }
}

class SimplePizzaFactory {
    createPizza(pizzaType: PizzaType): Pizza {
        switch (pizzaType) {
            case PizzaType.CHEESE:
            return new CheesePizza();
            case PizzaType.VEGGIE:
            return new VeggiePizza();
            case PizzaType.CLAM:
            return new ClamPizza();
            case PizzaType.PEPPERONI:
            return new PepperoniPizza();
            default:
            throw new Error('Unknown type');
        }
    }
}

abstract class Pizza {
    _description: string;
    prepare() {
        console.log('prepare');
    }
    bake() {
        console.log('bake');
    }
    cut() {
        console.log('cut');
    }
    box() {
        console.log('box');
    }
    getDescription() {
        console.log(this._description + ' Pizza');
    }
}

class CheesePizza extends Pizza {
    constructor() {
        super();
        this._description = PizzaType.CHEESE;
    }
}

class VeggiePizza extends Pizza {
    constructor() {
        super();
        this._description = PizzaType.VEGGIE;
    }
}

class ClamPizza extends Pizza {
    constructor() {
        super();
        this._description = PizzaType.CLAM;
    }
}

class PepperoniPizza extends Pizza {
    constructor() {
        super();
        this._description = PizzaType.PEPPERONI;
    }
}
