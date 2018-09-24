export abstract class AdapterExample {
    static run() {
        const ducks: Duck[] = [
            new MalardDuck(),
            new TurkeyAdapter(new WildTurkey())
        ];

        ducks.forEach(duck => duck.fly());
    }
}

interface Duck {
    quack();
    fly();
}

interface Turkey {
    gobble();
    fly();
}

class MalardDuck implements Duck {
    quack() {
        console.log("Quack");
    }
    fly() {
        console.log("fly");
    }
}

class WildTurkey implements Turkey {
    gobble() {
        console.log("gobble gobble");
    }
    fly() {
        console.log("I'm flying a short distance");
    }
}

class TurkeyAdapter implements Duck {
    private _turkey: Turkey;
    constructor(turkey: Turkey) {
        this._turkey = turkey;
    }
    quack() {
        return this._turkey.gobble();
    }
    fly() {
        for(let i = 0; i < 5; i++) {
            this._turkey.fly();
        }
    }
}