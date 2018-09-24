import { SingletonExample } from './singleton/singleton';
import { AbstractFactory } from './factories/headFirst/abstractFactory/pizza';
import { FactoryMethod } from './factories/headFirst/factoryMethod/pizza';
import { SimpleFactory } from './factories/headFirst/simpleFactory/pizza';
import { Decorator } from './decorator/beverage';
import { ObserverExample } from './observer/weather-station';
import { Strategy } from './strategy/duckt';
import * as mapSite from './factories/gangOfFour/map-site';
import { Polymorphism } from './polymorphism/animals';

(() => {
    // Polymorphism.run();
    // Strategy.run();
    // ObserverExample.run();
    // Decorator.run();
    // SimpleFactory.run();
    // FactoryMethod.run();
    // AbstractFactory.run();
    SingletonExample.run();
})();
