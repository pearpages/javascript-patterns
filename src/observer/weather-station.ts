interface Subject {
    registerObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObservers(): void;
}

interface Observer {
    update(temp: number, humidity: number, pressure: number): void;
}

abstract class ConcreteDisplayObserver implements Observer, Display {
    constructor(subject: Subject) {
        subject.registerObserver(this);
    }
    update(temp: number, humidity: number, pressure: number): void {
        this.display(`${this.constructor.name} temp: ${temp}, humidity: ${humidity}, pressure: ${pressure}`);
    }
    display(data: string): void {
        console.log(data);
    }
}

interface Display {
    display(data: string): void;
}

class WeatherData implements Subject {
    private _observers: Observer[] = [];
    private _temp: number;
    private _humidity: number;
    private _pressure: number;

    registerObserver(observer: Observer): void {
        this._observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        this._observers = this._observers.filter(o => o != observer);
    }

    notifyObservers(){
        const temp = this.getTemperature();
        const humidity = this.getHumidity();
        const pressure = this.getPressure();
        this._observers.forEach(observer => observer.update(
            temp, humidity, pressure));
    }

    getTemperature(): number {
        return this._temp;
    }

    getHumidity(): number {
        return this._humidity;
    }

    getPressure(): number {
        return this._pressure;
    }

    measuramentsChanged() {
        this.notifyObservers();
    }

    setMeasuraments(temp: number, humidity: number, pressure: number) {
        this._temp = temp;
        this._humidity = humidity;
        this._pressure = pressure;
        this.measuramentsChanged();
    }
}

class CurrentConditionsDisplay extends ConcreteDisplayObserver {}

class StatisticsDisplay extends ConcreteDisplayObserver {}

class ThirdPartyDisplay extends ConcreteDisplayObserver {}

class ForecastDisplay extends ConcreteDisplayObserver {}

export class ObserverExample {
    private constructor() {}
    static run(): void {
        const weatherData = new WeatherData();
        const currentConditionsDisplay = new CurrentConditionsDisplay(weatherData);
        const statisticsDisplay = new StatisticsDisplay(weatherData);
        const thirdPartyDisplay = new ThirdPartyDisplay(weatherData);
        const forecastDisplay = new ForecastDisplay(weatherData);
        weatherData.setMeasuraments(makeNumber(), makeNumber(), makeNumber());
        weatherData.setMeasuraments(makeNumber(), makeNumber(), makeNumber());
        weatherData.setMeasuraments(makeNumber(), makeNumber(), makeNumber());
        weatherData.setMeasuraments(makeNumber(), makeNumber(), makeNumber());
    }
}

function makeNumber(): number {
    return Math.floor(Math.random() * 100);
}