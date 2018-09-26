export abstract class Animal {
    abstract makeNoise(): void;
}

export class Dog extends Animal {
    makeNoise(): void {
        console.log('BUP BUP!!!');
    }
}

export class Cat extends Animal {
    makeNoise(): void {
        console.log("MEOW!!!");
    }
}

export class Polymorphism {
    private constructor() {}
    static run() {
        const animals = [
            new Dog(),
            new Cat(),
            new Dog(),
            new Cat(),
            new Cat()
        ];

        animals.forEach(animal => animal.makeNoise());

        animals.forEach(animal => {
            let description: string[] = [];
            if (animal instanceof Animal) {
                description.push('Animal');
            }
            if (animal instanceof Dog) {
                description.push('Dog');
            }
            if (animal instanceof Cat) {
                description.push('Cat');
            }
            console.log(`Is a ${description.join(', ')}`);
        });

        // minified the name will change
        animals.forEach(animal => console.log(animal.constructor.name));
    }
}
