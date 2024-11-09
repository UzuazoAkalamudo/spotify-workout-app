export class Album {
    id: string;
    name: string;
    type: string;
    artists: Array<Object>;
    energy: string;
    coverUrl: string;
    tracks: Array<Object>;
    constructor(id: string, name: string, type: string, artists: Array<Object>, energy: string, coverUrl: string, tracks: Array<Object>) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.artists = artists;
        this.energy = energy;
        this.coverUrl = coverUrl;
        this.tracks = tracks
    };
};

export class Track {
    id: string;
    name: string;
    energy: string;
    incline: string;
    speed: Speed;
    constructor(id: string, name: string, energy: string, incline: string, speed: Speed) {
        this.id = id;
        this.name = name;
        this.energy = energy;
        this.incline = incline;
        this.speed = speed;
    };
};

export class Speed {
    kmph: string;
    mph: string;
    constructor(kmph: string, mph: string) {
        this.kmph = kmph;
        this.mph = mph;
    };
}