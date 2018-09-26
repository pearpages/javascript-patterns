/**
 * PizzaStores implement FactoryMethod
 * PizzaIngredientFactory implement AbstractFactory
 */

export class AbstractFactory {
    private constructor() {}
    static run() {
        const store: PizzaStore = new NYPizzaStore();
        const pizza: Pizza = store.orderPizza(PizzaType.PEPPERONI);
        Pizza.describe(pizza);
    }
}

type Dough = string;
type Sauce = string;
type Cheese = string;
type Veggies = string;
type Pepperoni  = string;
type Clam  = string;

interface PizzaIngredientFactory {
    _school: string;
    createDough(): Dough;
    createSauce(): Sauce;
    createCheese(): Cheese;
    createVeggies(): Veggies;
    createPepperoni(): Pepperoni;
    createClam(): Clam;
}

class NYPizzaIngredientFactory implements PizzaIngredientFactory {
    _school = 'NY';
    createDough(): Dough {
        return `${this._school} dough`;
    }
    createSauce(): Sauce {
        return `${this._school} sauce`;
    }
    createCheese(): Cheese {
        return `${this._school} cheese`;
    }
    createVeggies(): Veggies {
        return `${this._school} veggies`;
    }
    createPepperoni(): Pepperoni {
        return `${this._school} pepperoni`;
    }
    createClam(): Clam {
        return `${this._school} clam`;
    }
}

class ChicagoPizzaIngredientFactory implements PizzaIngredientFactory {
    _school = 'Chicago';
    createDough(): Dough {
        return `${this._school} dough`;
    }
    createSauce(): Sauce {
        return `${this._school} sauce`;
    }
    createCheese(): Cheese {
        return `${this._school} cheese`;
    }
    createVeggies(): Veggies {
        return `${this._school} veggies`;
    }
    createPepperoni(): Pepperoni {
        return `${this._school} pepperoni`;
    }
    createClam(): Clam {
        return `${this._school} clam`;
    }
}

enum PizzaType {
    CHEESE = 'Cheese',
    PEPPERONI = 'Pepperoni',
    CLAM = 'Clam',
    VEGGIE = 'Veggie'
}

abstract class PizzaStore {
    _pizzaIngredientFactory: PizzaIngredientFactory;
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

export class NYPizzaStore extends PizzaStore {
    _pizzaIngredientFactory = new NYPizzaIngredientFactory();
    _createPizza(pizzaType: PizzaType): Pizza {
        switch (pizzaType) {
            case PizzaType.CHEESE:
            return new NYStyleCheesePizza(this._pizzaIngredientFactory);
            case PizzaType.PEPPERONI:
            return new NYStylePepperoniPizza(this._pizzaIngredientFactory);
            case PizzaType.CLAM:
            return new NYStyleClamPizza(this._pizzaIngredientFactory);
            case PizzaType.VEGGIE:
            return new NYStyleVeggiePizza(this._pizzaIngredientFactory);
            default:
            throw new Error('Unknown type');
        }
    }
}

class ChicagoPizzaStore extends PizzaStore {
    _pizzaIngredientFactory = new ChicagoPizzaIngredientFactory();
    _createPizza(pizzaType: PizzaType): Pizza {
        switch (pizzaType) {
            case PizzaType.CHEESE:
            return new ChicagoStyleCheesePizza(this._pizzaIngredientFactory);
            case PizzaType.PEPPERONI:
            return new ChicagoStylePepperoniPizza(this._pizzaIngredientFactory);
            case PizzaType.CLAM:
            return new ChicagoStyleClamPizza(this._pizzaIngredientFactory);
            case PizzaType.VEGGIE:
            return new ChicagoStyleVeggiePizza(this._pizzaIngredientFactory);
            default:
            throw new Error('Unknown type');
        }
    }
}

abstract class Pizza {
    _dough: Dough;
    _sauce: Sauce;
    _cheese: Cheese;
    _main: (Clam|Pepperoni)
    _pizzaIngredientFactory: PizzaIngredientFactory;
    constructor(pizzaIngredientFactory: PizzaIngredientFactory) {
        this._pizzaIngredientFactory = pizzaIngredientFactory;
    }
    abstract prepare();
    abstract bake();
    abstract cut();
    abstract box();
    static describe(pizza: Pizza) {
        console.log(`${pizza._dough ? pizza._dough + ',' : ''} ${pizza._sauce ? pizza._sauce + ',' : ''} ${pizza._cheese ? pizza._cheese + ',' : ''} ${pizza._main ? pizza._main : ''}`);
    }
}

class NYStyleCheesePizza extends Pizza {
    prepare() {
        this._cheese = this._pizzaIngredientFactory.createCheese();
        this._main = this._pizzaIngredientFactory.createCheese();
    }
    bake() {}
    cut() {}
    box() {}
}
class NYStylePepperoniPizza extends Pizza {
    prepare() {
        this._cheese = this._pizzaIngredientFactory.createCheese();
        this._main = this._pizzaIngredientFactory.createCheese();
    }
    bake() {}
    cut() {}
    box() {}
}
class NYStyleClamPizza extends Pizza {
    prepare() {
        this._cheese = this._pizzaIngredientFactory.createCheese();
        this._main = this._pizzaIngredientFactory.createClam();
    }
    bake() {}
    cut() {}
    box() {}
}
class NYStyleVeggiePizza extends Pizza {
    prepare() {
        this._cheese = this._pizzaIngredientFactory.createCheese();
        this._main = this._pizzaIngredientFactory.createVeggies();
    }
    bake() {}
    cut() {}
    box() {}
}

class ChicagoStyleCheesePizza extends Pizza {
    prepare() {
        this._cheese = this._pizzaIngredientFactory.createCheese();
        this._main = this._pizzaIngredientFactory.createCheese();
    }
    bake() {}
    cut() {}
    box() {}
}
class ChicagoStylePepperoniPizza extends Pizza {
    prepare() {
        this._cheese = this._pizzaIngredientFactory.createCheese();
        this._main = this._pizzaIngredientFactory.createPepperoni();
    }
    bake() {}
    cut() {}
    box() {}
}
class ChicagoStyleClamPizza extends Pizza {
    prepare() {
        this._cheese = this._pizzaIngredientFactory.createCheese();
        this._main = this._pizzaIngredientFactory.createClam();
    }
    bake() {}
    cut() {}
    box() {}
}
class ChicagoStyleVeggiePizza extends Pizza {
    prepare() {
        this._cheese = this._pizzaIngredientFactory.createCheese();
        this._main = this._pizzaIngredientFactory.createVeggies();
    }
    bake() {}
    cut() {}
    box() {}
}
