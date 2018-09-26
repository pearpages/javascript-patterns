import { SingletonExample } from './web/singleton/singleton';
import { AbstractFactory } from './web/factories/headFirst/abstractFactory/pizza';
import { FactoryMethod } from './web/factories/headFirst/factoryMethod/pizza';
import { SimpleFactory } from './web/factories/headFirst/simpleFactory/pizza';
import { Decorator } from './web/decorator/beverage';
import { ObserverExample } from './web/observer/weather-station';
import { Strategy } from './web/strategy/duckt';
import * as mapSite from './web/factories/gangOfFour/map-site';
import { Polymorphism } from './web/polymorphism/animals';
import { CommandExample } from './web/command/command';
import { AdapterExample } from './web/adapter/turkey';
import { FacadeExample } from './web/facade/home-theater';

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
