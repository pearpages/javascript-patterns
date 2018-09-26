/**
 * TODO: Not finished
 */

export enum Direction {
    North = 0,
    South,
    East,
    West
};

export abstract class MapSite {
    abstract enter();
}

export class Room extends MapSite {
    private _sides: MapSite[];
    private _roomNumber: number;

    constructor(roomNumber: number) {
        super();
        this._roomNumber = roomNumber;
        this._sides = [null, null, null, null];
    }

    get roomNumber(): number {
        return this._roomNumber;
    }

    enter() {
        // ...
    }

    setSide(direction: Direction, mapSite: MapSite): void {
        this._sides[direction] = mapSite;
    }

    getSide(direction: Direction): MapSite {
        return this._sides[direction];
    }
}

export class Wall extends MapSite {
    enter() {
        // ...
    }
}

export class Door extends MapSite {
    private _isOpen = false;

    constructor(private _room1: Room = undefined,  private _room2: Room = undefined) {
        super();
    }

    enter() {
        // ...
    }

    otherSideFrom(room: Room): Room {
        if (room == this._room1) {
            return this._room2;
        } else if (room == this._room2) {
            return this._room1
        }
        throw Error("Wrong room");
    }
}

export class Maze {
    private _rooms: Room[];

    addRoom(room: Room) {
        this._rooms.push(room);
    }

    roomNo(roomNo: number): Room {
        return this._rooms.find(room => roomNo == room.roomNumber);
    }
}
