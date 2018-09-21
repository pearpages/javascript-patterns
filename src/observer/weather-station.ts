interface Subject {
    registerObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObservers(): void;
}

interface Observer {
    update(temp: number, humidity: number, pressure: number): void;
}

abstract class DisplayElement {
    display(data: string): void {
        console.log(data);
    }
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

class CurrentConditionsDisplay extends DisplayElement implements Observer {
    update(temp: number, humidity: number, pressure: number): void {
        this.display(`CurrentConditionsDisplay temp: ${temp}, humidity: ${humidity}, pressure: ${pressure}`);
    }
}

class StatisticsDisplay extends DisplayElement implements Observer {
    update(temp: number, humidity: number, pressure: number): void {
        this.display(`StatisticsDisplay temp: ${temp}, humidity: ${humidity}, pressure: ${pressure}`);
    }
}

class ThirdPartyDisplay extends DisplayElement implements Observer {
    update(temp: number, humidity: number, pressure: number): void {
        this.display(`ThirdPartyDisplay temp: ${temp}, humidity: ${humidity}, pressure: ${pressure}`);
    }
}

class ForecastDisplay extends DisplayElement implements Observer {
    update(temp: number, humidity: number, pressure: number): void {
        this.display(`ForecastDisplay temp: ${temp}, humidity: ${humidity}, pressure: ${pressure}`);
    }
}

export class ObserverExample {
    private constructor() {}
    static run(): void {
        const weatherData = new WeatherData();
        const currentConditionsDisplay = new CurrentConditionsDisplay();
        const statisticsDisplay = new StatisticsDisplay();
        const thirdPartyDisplay = new ThirdPartyDisplay();
        const forecastDisplay = new ForecastDisplay();
        weatherData.registerObserver(currentConditionsDisplay);
        weatherData.registerObserver(statisticsDisplay);
        weatherData.registerObserver(thirdPartyDisplay);
        weatherData.registerObserver(forecastDisplay);
        weatherData.setMeasuraments(makeNumber(), makeNumber(), makeNumber());
        weatherData.setMeasuraments(makeNumber(), makeNumber(), makeNumber());
        weatherData.setMeasuraments(makeNumber(), makeNumber(), makeNumber());
        weatherData.setMeasuraments(makeNumber(), makeNumber(), makeNumber());
    }
}

function makeNumber(): number {
    return Math.floor(Math.random() * 100);
}