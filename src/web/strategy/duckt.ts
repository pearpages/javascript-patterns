export class Strategy {
    private constructor() {}
    static run(): void {
        const duck1 = new Duck(new Flyy(), new Quack());
        const duck2 = new Duck(new Flyyyy(), new Quackquack());
        duck1.quack();
        duck1.fly();
        duck2.quack();
        duck2.fly();
        duck1.setFlyBehavior(new Flyy());
        duck1.quack();
        duck1.fly();
    }
}

export class Duck {
    private _flyBehavior: FlyBehavior;
    private _quackBehavior: QuackBehavior;

    constructor(flyBehavior: FlyBehavior, quackBehavior: QuackBehavior) {
        this._flyBehavior = flyBehavior;
        this._quackBehavior = quackBehavior;
    }

    setFlyBehavior(flyBehavior: FlyBehavior): void {
        this._flyBehavior = flyBehavior;
    }

    setQuackBehavior(quackBehavior: QuackBehavior): void {
        this._quackBehavior = quackBehavior;
    }

    fly() {
        this._flyBehavior.fly();
    }

    quack() {
        this._quackBehavior.quack();
    }
}

interface FlyBehavior {
    fly(): void;
}

interface QuackBehavior {
    quack(): void;
}

class Flyy implements FlyBehavior {
    fly(): void {
        console.log('flyy');
    }
}

class Flyyyy implements FlyBehavior {
    fly(): void {
        console.log('flyyyy');
    }
}

class Quack implements QuackBehavior {
    quack(): void {
        console.log('quack');
    }
}

class Quackquack implements QuackBehavior {
    quack(): void {
        console.log('quack quack');
    }
}
