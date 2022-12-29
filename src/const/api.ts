export type Item = {
  type: string;
  title: string;
  imdb_rate: number;
  is_new?: boolean;
  country: string;
  year: number;
  length: number;
  num_seasons: number;
  min_age: number;
  genres: string[];
  poster: string;
  keyframe: string;
};

export const Api: { backgrounds: { url: string }[]; items: Item[] } = {
  backgrounds: [
    {
      url: 'background/sherlok.jpg',
    },
    {
      url: 'background/stranger_things.jpg',
    },
  ],
  items: [
    {
      type: 'tvseries',
      title: 'Stranger things',
      imdb_rate: 9.4,
      is_new: true,
      country: 'USA',
      year: 2016,
      length: 3240,
      num_seasons: 5,
      min_age: 16,
      genres: ['horror', 'sci-fi', 'fantasy', 'thriller', 'drama', 'detective'],
      poster: 'poster/stranger_things.jpg',
      keyframe: 'keyframe/stranger_things.jpg',
    },
    {
      type: 'tvseries',
      title: "The Handmaid's Tale",
      imdb_rate: 8.1,
      country: 'USA',
      year: 2017,
      length: 3600,
      num_seasons: 6,
      min_age: 18,
      genres: ['fantasy', 'thriller', 'drama'],
      poster: 'poster/handmaids_tale.jpg',
      keyframe: 'keyframe/handmaids_tale.jpg',
    },
    {
      type: 'tvseries',
      title: 'Gravity Falls',
      imdb_rate: 8.7,
      country: 'USA',
      year: 2012,
      length: 1320,
      num_seasons: 2,
      min_age: 12,
      genres: ['cartoon', 'comedy', 'detective', 'adventure', 'family', 'fantasy'],
      poster: 'poster/gravity_falls.jpg',
      keyframe: 'keyframe/gravity_falls.jpg',
    },
    {
      type: 'tvseries',
      title: 'Stranger things',
      imdb_rate: 9.4,
      is_new: true,
      country: 'USA',
      year: 2016,
      length: 3240,
      num_seasons: 5,
      min_age: 16,
      genres: ['horror', 'sci-fi', 'fantasy', 'thriller', 'drama', 'detective'],
      poster: 'poster/stranger_things.jpg',
      keyframe: 'keyframe/stranger_things.jpg',
    },
    {
      type: 'tvseries',
      title: "The Handmaid's Tale",
      imdb_rate: 8.1,
      country: 'USA',
      year: 2017,
      length: 3600,
      num_seasons: 6,
      min_age: 18,
      genres: ['fantasy', 'thriller', 'drama'],
      poster: 'poster/handmaids_tale.jpg',
      keyframe: 'keyframe/handmaids_tale.jpg',
    },
    {
      type: 'tvseries',
      title: 'Gravity Falls',
      imdb_rate: 8.7,
      country: 'USA',
      year: 2012,
      length: 1320,
      num_seasons: 2,
      min_age: 12,
      genres: ['cartoon', 'comedy', 'detective', 'adventure', 'family', 'fantasy'],
      poster: 'poster/gravity_falls.jpg',
      keyframe: 'keyframe/gravity_falls.jpg',
    },
    {
      type: 'tvseries',
      title: 'Stranger things',
      imdb_rate: 9.4,
      is_new: true,
      country: 'USA',
      year: 2016,
      length: 3240,
      num_seasons: 5,
      min_age: 16,
      genres: ['horror', 'sci-fi', 'fantasy', 'thriller', 'drama', 'detective'],
      poster: 'poster/stranger_things.jpg',
      keyframe: 'keyframe/stranger_things.jpg',
    },
    {
      type: 'tvseries',
      title: "The Handmaid's Tale",
      imdb_rate: 8.1,
      country: 'USA',
      year: 2017,
      length: 3600,
      num_seasons: 6,
      min_age: 18,
      genres: ['fantasy', 'thriller', 'drama'],
      poster: 'poster/handmaids_tale.jpg',
      keyframe: 'keyframe/handmaids_tale.jpg',
    },
    {
      type: 'tvseries',
      title: 'Gravity Falls',
      imdb_rate: 8.7,
      country: 'USA',
      year: 2012,
      length: 1320,
      num_seasons: 2,
      min_age: 12,
      genres: ['cartoon', 'comedy', 'detective', 'adventure', 'family', 'fantasy'],
      poster: 'poster/gravity_falls.jpg',
      keyframe: 'keyframe/gravity_falls.jpg',
    },
  ],
};
