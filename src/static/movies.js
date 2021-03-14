import pictures from "../assets/img";

const {
  pulpFiction,
  bohemian,
  killBill,
  avengers,
  inception,
  reserviorDogs
} = pictures;

const movies = [
  {
    id: 0,
    title: "Pulp Fiction",
    description: "Action and Adventure",
    picture: pulpFiction,
    releaseDate: 1994
  },
  {
    id: 1,
    title: "Bohemian Rapsody",
    description: "Drama, Biography, Music",
    picture: bohemian,
    releaseDate: 2018
  },
  {
    id: 3,
    title: "Kill Bill: Vol 2",
    description: "Oscar winning Movie",
    picture: killBill,
    releaseDate: 2004
  },
  {
    id: 4,
    title: "Avegers: War of infinity",
    description: "Action & Adventure",
    picture: avengers,
    releaseDate: 2018
  },
  {
    id: 5,
    title: "Inception",
    description: "Action & Adventure",
    picture: inception,
    releaseDate: 2010
  },
  {
    id: 6,
    title: "Reservior Dogs",
    description: "Oscar winnig Movie",
    picture: reserviorDogs,
    releaseDate: 1992
  },
];

export default movies;