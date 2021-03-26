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
    genre: "Action and Adventure",
    picture: pulpFiction,
    releaseDate: 1994,
    runtime: 194,
    rating: 8.8,
    description: "Pulp Fiction is a 1994 American neo-noir black comedy crime film written and directed by Quentin Tarantino, who conceived it with Roger Avary. Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles. The title refers to the pulp magazines and hardboiled crime novels popular during the mid-20th century, known for their graphic violence and punchy dialogue",
  },
  {
    id: 1,
    title: "Bohemian Rapsody",
    genre: "Drama, Biography, Music",
    picture: bohemian,
    releaseDate: 2018,
    runtime: 134,
    rating: 8.0,
    description: "Bohemian Rhapsody is a 2018 biographical drama film directed by Bryan Singer from a screenplay by Anthony McCarten, and produced by Graham King and Queen manager Jim Beach. The film tells the story of Freddie Mercury, the lead singer of the British rock musical band Queen.The film stars Rami Malek as Mercury, with Lucy Boynton, Gwilym Lee, Ben Hardy, Joe Mazzello, Aidan Gillen, Tom Hollander, Allen Leech, and Mike Myers. The film follows the singer's life from the formation of the band up to their 1985 Live Aid performance at the original Wembley Stadium",
  },
  {
    id: 3,
    title: "Kill Bill: Vol 2",
    genre: "Oscar winning Movie",
    picture: killBill,
    releaseDate: 2004,
    runtime: 136,
    rating: 8.1,
    description: "Kill Bill: Volume 2 is a 2004 American martial arts film written and directed by Quentin Tarantino. It stars Uma Thurman as the Bride, who continues her campaign of revenge against the Deadly Viper Assassination Squad (Lucy Liu, Michael Madsen, Daryl Hannah, and Vivica A. Fox) and their leader Bill (David Carradine), who tried to kill her and her unborn child. Volume 2 is the second of two Kill Bill films produced simultaneously; the first, Volume 1, was released in 2003. The films were originally set for a single release, but the film, with a runtime of over four hours, was divided in two. Tarantino conceived Kill Bill as an homage to grindhouse cinema including martial arts films, samurai cinema, blaxploitation, and spaghetti westerns. Like Volume 1, Volume 2 received positive reviews and was a commercial success.",
  },
  {
    id: 4,
    title: "Avegers: War of infinity",
    genre: "Action & Adventure",
    picture: avengers,
    releaseDate: 2018,
    runtime: 149,
    rating: 8.4,
    description: "Avengers: Infinity War is a 2018 American superhero film based on the Marvel Comics superhero team the Avengers. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sequel to The Avengers (2012) and Avengers: Age of Ultron (2015), and the 19th film in the Marvel Cinematic Universe (MCU). Directed by Anthony and Joe Russo and written by Christopher Markus and Stephen McFeely, the film features an ensemble cast including Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans, Scarlett Johansson, Benedict Cumberbatch, Don Cheadle, Tom Holland, Chadwick Boseman, Paul Bettany, Elizabeth Olsen, Anthony Mackie, Sebastian Stan, Danai Gurira, Letitia Wright, Dave Bautista, Zoe Saldana, Josh Brolin, and Chris Pratt. In the film, the Avengers and the Guardians of the Galaxy attempt to prevent Thanos from collecting the six all-powerful Infinity Stones as part of his quest to kill half of all life in the universe.",
  },
  {
    id: 5,
    title: "Inception",
    genre: "Action & Adventure",
    picture: inception,
    releaseDate: 2010,
    runtime: 148,
    rating: 8.8,
    description: "Inception is a 2010 science fiction action film written and directed by Christopher Nolan, who also produced the film with his wife, Emma Thomas. The film stars Leonardo DiCaprio as a professional thief who steals information by infiltrating the subconscious of his targets. He is offered a chance to have his criminal history erased as payment for the implantation of another person's idea into a target's subconscious. The ensemble cast includes Ken Watanabe, Joseph Gordon-Levitt, Marion Cotillard, Elliot Page, Tom Hardy, Dileep Rao, Cillian Murphy, Tom Berenger, and Michael Caine.",
  },
  {
    id: 6,
    title: "Reservior Dogs",
    genre: "Oscar winnig Movie",
    picture: reserviorDogs,
    releaseDate: 1992,
    runtime: 99,
    rating: 8.3,
    description: "Reservoir Dogs is a 1992 American crime film written and directed by Quentin Tarantino in his feature-length debut. It stars Harvey Keitel, Tim Roth, Chris Penn, Steve Buscemi, Lawrence Tierney, Michael Madsen, Tarantino, and Edward Bunker as diamond thieves whose planned heist of a jewelry store goes terribly wrong. The film depicts the events before and after the heist. Kirk Baltz, Randy Brooks, and Steven Wright also play supporting roles. It incorporates many motifs that have become Tarantino's hallmarks: violent crime, pop culture references, profanity, and nonlinear storytelling.",
  },
];

export default movies;