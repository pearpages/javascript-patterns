export class FactoryMethod {
    private constructor() {}
    static run() {

    }
}

abstract class PizzaStore {
    abstract _createPizza(pizzaType: PizzaType): Pizza;
    orderPizza(pizzaType: PizzaType): Pizza {
        // The Factory Method
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
            return new NYStyleCheesePizza();
            case PizzaType.PEPPERONI:
            return new NYStylePepperoniPizza();
            case PizzaType.CLAM:
            return new NYStyleClamPizza();
            case PizzaType.VEGGIE:
            return new NYStyleVeggiePizza();
            default:
            throw new Error('Unknown type');
        }
    }
}

class ChicaoPizzaStore extends PizzaStore {
    _createPizza(pizzaType: PizzaType): Pizza {
        switch (pizzaType) {
            case PizzaType.CHEESE:
            return new ChicagoStyleCheesePizza();
            case PizzaType.PEPPERONI:
            return new ChicagoStylePepperoniPizza();
            case PizzaType.CLAM:
            return new ChicagoStyleClamPizza();
            case PizzaType.VEGGIE:
            return new ChicagoStyleVeggiePizza();
            default:
            throw new Error('Unknown type');
        }
    }
}

abstract class Pizza {
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
