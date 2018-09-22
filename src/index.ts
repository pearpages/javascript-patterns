import { Decorator } from './decorator/beverage';
import { ObserverExample } from './observer/weather-station';
import { Strategy } from './strategy/duckt';
import * as mapSite from './factories/map-site';
import { Polymorphism } from './polymorphism/animals';

(() => {
    // Polymorphism.run();
    // Strategy.run();
    // ObserverExample.run();
    Decorator.run();
})();
