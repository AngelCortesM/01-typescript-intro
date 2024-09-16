
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: string;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Red Wine",
    details: {
        author: "UB40",
        year: "1992"
    }
};

const song = 'New Song';

const { song: anotherSong, songDuration: duration, details } = audioPlayer;
const { author } = details;


// console.log('Song: ', anotherSong);
// console.log('Durations: ', duration);
// console.log('Author: ', author);

const [, , trunks='Not found']: string[] = ['Goku', 'Vegeta', 'Trunks'];

console.error('Personaje 3:', trunks);
export { };