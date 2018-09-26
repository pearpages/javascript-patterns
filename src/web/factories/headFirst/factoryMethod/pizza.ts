export class FactoryMethod {
    private constructor() {}
    static run() {
        const nyPizzaStore = new NYPizzaStore();
        const nyCheesePizza = nyPizzaStore.orderPizza(PizzaType.CHEESE);
        const chicagoPizzaStore = new ChicagoPizzaStore();
        const chicagoPepperoniPizza = chicagoPizzaStore.orderPizza(PizzaType.PEPPERONI);

        PizzaDescriptor.describe(nyCheesePizza);
        PizzaDescriptor.describe(chicagoPepperoniPizza);
    }
}

abstract class PizzaDescriptor {
    static describe(pizza: Pizza) {
        console.log(pizza.getDescription());
    }
}

abstract class PizzaStore {
    // The Factory Method
    abstract _createPizza(pizzaType: PizzaType): Pizza;
    orderPizza(pizzaType: PizzaType): Pizza {
        const pizza = this._createPizza(pizzaType);

        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
        return pizza;
    }
}

enum PizzaType {
    CHEESE = 'Cheese',
    PEPPERONI = 'Pepperoni',
    CLAM = 'Clam',
    VEGGIE = 'Veggie'
}

export class NYPizzaStore extends PizzaStore {
    _createPizza(pizzaType: PizzaType): Pizza {
        switch (pizzaType) {
            case PizzaType.CHEESE:
            return new NYStyleCheesePizza('NY Cheese Pizza');
            case PizzaType.PEPPERONI:
            return new NYStylePepperoniPizza('NY Pepperoni Pizza');
            case PizzaType.CLAM:
            return new NYStyleClamPizza('NY Clam Pizza');
            case PizzaType.VEGGIE:
            return new NYStyleVeggiePizza('NY Veggie Pizza');
            default:
            throw new Error('Unknown type');
        }
    }
}

class ChicagoPizzaStore extends PizzaStore {
    _createPizza(pizzaType: PizzaType): Pizza {
        switch (pizzaType) {
            case PizzaType.CHEESE:
            return new ChicagoStyleCheesePizza('Chicago Cheese Pizza');
            case PizzaType.PEPPERONI:
            return new ChicagoStylePepperoniPizza('Chicago Pepperoni Pizza');
            case PizzaType.CLAM:
            return new ChicagoStyleClamPizza('Chicago Clam Pizza');
            case PizzaType.VEGGIE:
            return new ChicagoStyleVeggiePizza('Chicago Veggie Pizza');
            default:
            throw new Error('Unknown type');
        }
    }
}

abstract class Pizza {
    _description: string;
    constructor(description: string) {
        this._description = description;
    }
    getDescription(): string {
        return this._description;
    }
    prepare() {}
    bake() {}
    cut() {}
    box() {}
}

class NYStyleCheesePizza extends Pizza {}
class NYStylePepperoniPizza extends Pizza {}
class NYStyleClamPizza extends Pizza {}
class NYStyleVeggiePizza extends Pizza {}

class ChicagoStyleCheesePizza extends Pizza {}
class ChicagoStylePepperoniPizza extends Pizza {}
class ChicagoStyleClamPizza extends Pizza {}
class ChicagoStyleVeggiePizza extends Pizza {}
