import {TQuestion} from '../reducer/types';

export const questions: Array<TQuestion> = [
  {
    type: `genre`,
    genre: `blues`,
    answers: [
      {
        src: `/01 - Nine Inch Nails - Letting Go While Holding On.mp3`,
        genre: `jazz`,
      },
      {
        src: `/02 - Nine Inch Nails - Together.mp3`,
        genre: `blues`,
      },
      {
        src: `/03 - Nine Inch Nails - Out In The Open.mp3`,
        genre: `rock`,
      },
      {
        src: `/04 - Nine Inch Nails - With Faith.mp3`,
        genre: `blues`,
      }
    ]
  },
  {
    type: `artist`,
    song: {
      artist: `The Stooges`,
      src: `/05 - Nine Inch Nails - Apart.mp3`,
    },
    answers: [
      {
        picture: `http://placehold.it/134x134`,
        artist: `Bob Marley`
      },
      {
        picture: `http://placehold.it/134x134`,
        artist: `The Stooges`
      },
      {
        picture: `http://placehold.it/134x134`,
        artist: `Frank Sinatra`
      }
    ]
  },
  {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `/01 - Nine Inch Nails - Letting Go While Holding On.mp3`,
        genre: `jazz`,
      },
      {
        src: `/02 - Nine Inch Nails - Together.mp3`,
        genre: `blues`,
      },
      {
        src: `/03 - Nine Inch Nails - Out In The Open.mp3`,
        genre: `rock`,
      },
      {
        src: `/04 - Nine Inch Nails - With Faith.mp3`,
        genre: `rock`,
      }
    ]
  },
  {
    type: `artist`,
    song: {
      artist: `Frank Sinatra`,
      src: `/05 - Nine Inch Nails - Apart.mp3`,
    },
    answers: [
      {
        picture: `http://placehold.it/134x134`,
        artist: `Bob Marley`
      },
      {
        picture: `http://placehold.it/134x134`,
        artist: `The Stooges`
      },
      {
        picture: `http://placehold.it/134x134`,
        artist: `Frank Sinatra`
      }
    ]
  }
];
