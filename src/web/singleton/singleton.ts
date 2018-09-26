/**
 * One of the best ways to do a Singleton with Javascript it's just to use a 'proxy' so we make sure we only invoke one instance.
 *
 * */

export class SingletonExample {
    static run() {
        const singletonInstance = Factory.getInstance('Car');
        singletonInstance.setDescription('hello');
        console.log(singletonInstance.getDescription());
        const anotherReferenceToTheSingleton = Factory.getInstance('Car');
        console.log('is the same object? :', singletonInstance == anotherReferenceToTheSingleton);
        singletonInstance.setDescription('it has changed!');
        console.log(singletonInstance.getDescription(), anotherReferenceToTheSingleton.getDescription());
    }
}
class Car {
    private _description: string;
    setDescription(description: string): void {
        this._description = description;
    }
    getDescription(): string {
        return this._description;
    }
}

class House {
    private _description: string;
    setDescription(description: string): void {
        this._description = description;
    }
    getDescription(): string {
        return this._description;
    }
}


abstract class Factory {
    private static _instances: {[key: string]: any} = {};
    static getInstance(type: string): any {
        if (this._instances[type]) {
            return this._instances[type];
        }
        this._instances[type] = eval(`new ${type}()`);
        return this._instances[type];
    }
}
