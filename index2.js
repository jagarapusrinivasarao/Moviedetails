class Movie {
  constructor(
    title,
    director,
    actor1,
    actor2,
    genres,
    language,
    country,
    rating,
    budget,
    title_year,
    keywords,
    imdb
  ) {
    this.title = title;
    this.director = director;
    this.actors = [actor1, actor2];
    this.genres = genres;
    this.language = language;
    this.country = country;
    this.rating = rating;
    this.budget = budget;
    this.year = title_year;
    this.keywords = keywords;
    this.imdb = imdb;
  }
}
// var movies = [];
function movieMap(val) {
  return new Movie(
    val.movie_title,
    val.director_name,
    val.actor_1_name,
    val.actor_2_name,
    val.genres,
    val.language,
    val.country,
    val.content_rating,
    val.budget,
    val.title_year,
    val.plot_keywords,
    val.movie_imdb_link
  );
}
function data() {
  var movies = [];
  var xmlhttp = new XMLHttpRequest();
  var url = 'http://starlord.hackerearth.com/movieslisting';

  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText);
      myArr.forEach(element => {
        movies.push(movieMap(element));
      });
    }
  };
  xmlhttp.open('GET', url, false);
  xmlhttp.send();
  return movies;
}
const movies = data()
