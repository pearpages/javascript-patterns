export abstract class CommandExample {
    static run() {
        const livingroomLight = new Light('Living Room');
        const kitchenLight = new Light('Kitchen');
        const livingRoomFan = new Fan('Living Room Ceiling');
        const garageDoor = new AutomaticDoor('Garage');
        const stereo = new Stereo();

        const remote = new SimpleRemoteControl();
        remote.setCommand(0, new LightOnCommand(livingroomLight), new LightOffCommand(livingroomLight));
        remote.setCommand(1, new LightOnCommand(kitchenLight), new LightOffCommand(kitchenLight));
        remote.setCommand(2, new FanOnCommand(livingRoomFan), new FanOffCommand(livingRoomFan));
        remote.setCommand(3, new AutomaticDoorOpenCommand(garageDoor), new AutomaticDoorCloseCommand(garageDoor));
        remote.setCommand(4, new StereoOnCommand(stereo), new StereoOffCommand(stereo));

        remote.pressButtonOn(0);
        remote.pressButtonOff(0);
        remote.pressButtonOn(1);
        remote.pressButtonOff(1);
        remote.pressButtonOn(2);
        remote.undoCommand();
        remote.undoCommand();
        remote.undoCommand();
        remote.undoCommand();
        remote.undoCommand();
        remote.pressButtonOff(2);
        remote.pressButtonOn(3);
        remote.pressButtonOff(3);
        remote.pressButtonOn(4);
        remote.undoCommand();
        remote.pressButtonOff(4);
    }
}

interface Command {
    execute: Function;
    undo: Function;
}

abstract class Machine {
    abstract _description: string;
    _userDescription: string;
    constructor(userDescription: string = '') {
        this._userDescription = userDescription;
    }
    getDescription(): string {
        return `${this._userDescription} ${this._description}`;
    }
    displayAction(action: string) {
        console.log(`${this.getDescription()} ${action}`);
    }
}

class Stereo extends Machine {
    _description = 'Stereo';
    on(): void {
        this.displayAction(`is on`);
    }
    off(): void {
        this.displayAction(`is off`);
    }
    setCd(): void {
        this.displayAction(`setCD`);
    }
    setVolume(volume: number) {
        this.displayAction(`setVolume ${volume}`);
    }
    ejectCd(): void {
        this.displayAction(`ejectCd `);
    }
}

class Light extends Machine {
    _description = 'Light';
    on(): void {
        this.displayAction(`is on`);
    }
    off(): void {
        this.displayAction(`is off`);
    }
}

enum FanSpeed {
    HIGH = 'HIGH',
    MEDIUM = 'MEDIUM',
    LOW = 'LOW',
    OFF = 'OFF'
}

class Fan extends Machine {
    _description = 'Fan';
    _speed = FanSpeed.OFF;
    high(): void {
        this._speed = FanSpeed.HIGH;
        this.displayAction(`is ${FanSpeed.HIGH}`);
    }
    medium(): void {
        this._speed = FanSpeed.MEDIUM;
        this.displayAction(`is ${FanSpeed.MEDIUM}`);
    }
    low(): void {
        this._speed = FanSpeed.LOW;
        this.displayAction(`is ${FanSpeed.LOW}`);
    }
    off(): void {
        this._speed = FanSpeed.OFF;
        this.displayAction(`is ${FanSpeed.OFF}`);
    }
    getSpeed(): FanSpeed {
        return this._speed;
    }
    setSpeed(fanSpeed: FanSpeed): void {
        this._speed = fanSpeed;
        this.displayAction(`is ${fanSpeed}`);
    }
}

class AutomaticDoor extends Machine {
    _description = 'Automatic Door';
    up() {
        this.displayAction(`is up`);
    }
    down() {
        this.displayAction(`is down`);
    }
    stop() {
        this.displayAction(`has stopped`);
    }
    lightOn() {
        this.displayAction(`has light on`);
    }
    lightOff() {
        this.displayAction(`has light off`);
    }
}

enum ButtonType {
    ON = 'on',
    OFF = 'off'
}

class FanOnCommand implements Command {
    private _fan: Fan;
    _undo: FanSpeed;
    constructor(fan: Fan) {
        this._fan = fan;
    }
    execute() {
        this._undo = this._fan.getSpeed();
        this._fan.low();
    }
    undo() {
        if (this._undo) {
            this._fan.setSpeed(this._undo);
            this._undo = undefined;
        }
    }
}

class FanOffCommand implements Command {
    private _fan: Fan;
    _undo: FanSpeed;
    constructor(fan: Fan) {
        this._fan = fan;
    }
    execute() {
        this._undo = this._fan.getSpeed();
        this._fan.off();
    }
    undo() {
        if (this._undo) {
            this._fan.setSpeed(this._undo);
            this._undo = undefined;
        }
    }
}

class LightOnCommand implements Command {
    private _light: Light;
    constructor(light: Light) {
        this._light = light;
    }

    execute() {
        this._light.on();
    }

    undo() {
        this._light.off();
    }
}

class LightOffCommand implements Command {
    private _light: Light;
    constructor(light: Light) {
        this._light = light;
    }

    execute() {
        this._light.off();
    }

    undo() {
        this._light.on();
    }
}

class AutomaticDoorOpenCommand implements Command {
    private _automaticDoor: AutomaticDoor;
    constructor(automaticDoor: AutomaticDoor) {
        this._automaticDoor = automaticDoor;
    }
    execute() {
        this._automaticDoor.up();
    }
    undo() {
        this._automaticDoor.down();
    }
}

class AutomaticDoorCloseCommand implements Command {
    private _automaticDoor: AutomaticDoor;
    constructor(automaticDoor: AutomaticDoor) {
        this._automaticDoor = automaticDoor;
    }
    execute() {
        this._automaticDoor.down();
    }
    undo() {
        this._automaticDoor.up();
    }
}

class StereoOnCommand implements Command {
    private _stereo: Stereo;
    constructor(stereo: Stereo) {
        this._stereo = stereo;
    }
    execute() {
        this._stereo.on();
        this._stereo.setCd();
        this._stereo.setVolume(11);
    }
    undo() {
        this._stereo.setVolume(5);
        this._stereo.ejectCd();
        this._stereo.off();
    }
}

class StereoOffCommand implements Command {
    private _stereo: Stereo;
    constructor(stereo: Stereo) {
        this._stereo = stereo;
    }
    execute() {
        this._stereo.off();
    }
    undo() {
        this._stereo.on();
    }
}

class SimpleRemoteControl {
    private _onCommand: Command[] = [];
    private _offCommand: Command[] = [];
    private _undoCommand: Command;

    private _setCommand(command: Command, buttonType: ButtonType, slot: number = 0): void {
        this[`_${buttonType}Command`][slot] = command;
    }

    undoCommand(): void {
        if (this._undoCommand) {
            this._undoCommand.undo();
        } else {
            console.log('nothing to undo');
        }
    }

    setCommand(slot: number = 0, commandOn: Command, commandOff: Command) {
        this._setCommand(commandOn, ButtonType.ON, slot);
        this._setCommand(commandOff, ButtonType.OFF, slot);
    }

    pressButtonOn(slot: number) {
        this._pressButton(ButtonType.ON, slot);
    }

    pressButtonOff(slot: number) {
        this._pressButton(ButtonType.OFF, slot);
    }

    private _pressButton(buttonType: ButtonType, slot: number = 0) {
        this[`_${buttonType}Command`][slot].execute();
        this._undoCommand = this[`_${buttonType}Command`][slot];
    }
}
