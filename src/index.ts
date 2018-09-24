import { SingletonExample } from './singleton/singleton';
import { AbstractFactory } from './factories/headFirst/abstractFactory/pizza';
import { FactoryMethod } from './factories/headFirst/factoryMethod/pizza';
import { SimpleFactory } from './factories/headFirst/simpleFactory/pizza';
import { Decorator } from './decorator/beverage';
import { ObserverExample } from './observer/weather-station';
import { Strategy } from './strategy/duckt';
import * as mapSite from './factories/gangOfFour/map-site';
import { Polymorphism } from './polymorphism/animals';
import { CommandExample } from './command/command';
import { AdapterExample } from './adapter/turkey';
import { FacadeExample } from './facade/home-theater';

(() => {
    // Polymorphism.run();
    // Strategy.run();
    // ObserverExample.run();
    // Decorator.run();
    // SimpleFactory.run();
    // FactoryMethod.run();
    // AbstractFactory.run();
    // SingletonExample.run();
    // CommandExample.run();
    // AdapterExample.run();
    FacadeExample.run();
})();
