export abstract class FacadeExample {
    static run() {
        const amp = new HTAmplifier();
        const dvd = new HTDvdPlayer(amp);
        const facade = new HTFacade(
            new HTAmplifier(),
            new HTTuner(amp),
            new HTDvdPlayer(amp),
            new HTCdPlayer(amp),
            new HTProjector(dvd),
            new HTLights(),
            new HTScreen(),
            new HTPopcornPopper(),
        );

        facade.watchMovie(new Movie('Pocahontas'));
        facade.endMovie();
    }
}

class HTFacade {
    private _htAmplifier: HTAmplifier;
    private _htTuner: HTTuner;
    private _htDvdPlayer: HTDvdPlayer;
    private _htCdPlayer: HTCdPlayer;
    private _htProjector: HTProjector;
    private _htLights: HTLights;
    private _htScreen: HTScreen;
    private _htPopCornPopper: HTPopcornPopper;

    constructor(
        htAmplifier: HTAmplifier,
        htTuner: HTTuner,
        htDvdPlayer: HTDvdPlayer,
        htCdPlayer: HTCdPlayer,
        htProjector: HTProjector,
        htLights: HTLights,
        htScreen: HTScreen,
        htPopCornPopper: HTPopcornPopper
    ) {
        this._htAmplifier = htAmplifier;
        this._htTuner = htTuner;
        this._htDvdPlayer = htDvdPlayer;
        this._htCdPlayer = htCdPlayer;
        this._htProjector = htProjector;
        this._htLights = htLights;
        this._htScreen = htScreen;
        this._htPopCornPopper = htPopCornPopper;
    }

    watchMovie(movie: Movie) {
        console.log('Get ready to watch a movie...');
        this._htPopCornPopper.on();
        this._htPopCornPopper.pop();
        this._htLights.dim(10);
        this._htScreen.down();
        this._htProjector.on();
        this._htProjector.wideScreenMode();
        this._htAmplifier.on();
        this._htAmplifier.setDvd()
        this._htAmplifier.setSurroundSound();
        this._htAmplifier.setVolume(5);
        this._htDvdPlayer.on();
        this._htDvdPlayer.play(movie);
    }

    endMovie() {
        console.log('Shutting movie theater down...');
        this._htPopCornPopper.off();
        this._htLights.on();
        this._htScreen.up();
        this._htProjector.off();
        this._htAmplifier.off();
        this._htDvdPlayer.stop();
        this._htDvdPlayer.eject();
        this._htDvdPlayer.off();
    }
}

class Movie {
    constructor(public title: string) {}
}

class HTScreen {
    up() {
        console.log('screen up');
    }
    down() {
        console.log('screen down');
    }
}

class HTPopcornPopper {
    on() {
        console.log('popcorn popper on')
    }
    off() {
        console.log('popcorn off');
    }
    pop() {
        console.log('popcorn pop')
    }
    toString() {}
}

class HTLights {
    on() {
        console.log('lights on');
    }
    off() {}
    dim(value: number) {
        console.log(`lights intensity ${value}`);
    }
    toString() {}
}

class HTProjector {
    _htDvdPlayer: HTDvdPlayer;
    constructor(htDvdPlayer: HTDvdPlayer) {
        this._htDvdPlayer = htDvdPlayer;
    }
    on() {
        console.log('projector on');
    }
    off() {
        console.log('projector off');
    }
    tvMode() {}
    wideScreenMode() {
        console.log('projector widescreen mode on');
    }
    toString() {}
}

class HTDvdPlayer {
    private _movie: Movie
    constructor(private _htAmplifier: HTAmplifier) {}
    on() {
        console.log('dvd on');
    }
    off() {
        console.log('dvd off');
    }
    eject() {
        console.log(`dvd ${this._movie.title} ejected`);
        this._movie = undefined;
    }
    pause() {}
    play(movie: Movie) {
        this._movie = movie;
        console.log(`playing ${movie.title}`)
    }
    setSurroundAudio() {}
    setTwoChannelAudio() {}
    stop() {
        console.log('dvd stopped');
    }
    toString() {}
}

class HTCdPlayer {
    private _htAmplifier: HTAmplifier;
    constructor(htAmplifier: HTAmplifier) {
        this._htAmplifier = htAmplifier;
    }
    on() {}
    off() {}
    eject() {}
    pause() {}
    play() {}
    stop() {}
    toString() {}
}

class HTTuner {
    private _htAmplifier: HTAmplifier;
    constructor(htAmplifier: HTAmplifier) {
        this._htAmplifier = htAmplifier;
    }
    on() {}
    off() {}
    setAm() {}
    setFm() {}
    setFrequency() {}
    toString() {}
}

class HTAmplifier {
    private _htTuner: HTTuner;
    private _htDvdPlayer: HTDvdPlayer;
    private _htCdPlayer: HTCdPlayer;
    on() {
        console.log('amp on');
    }
    off() {
        console.log('amp off');
    }
    setCd() {}
    setDvd() {
        console.log('amp switch to DVD')
    }
    setStereoSound() {}
    setSurroundSound() {
        console.log('amp surround sound set')
    }
    setTuner() {}
    setVolume(value: number) {
        console.log(`amp volume to ${value}`);
    }
    toString() {}
}