import BaseResult from "./BaseResult";

export default function MovieResult({ movie, query }) {
  return (
    <BaseResult
      result={{
        title: movie._source.Series_Title,
        year: movie._source.Released_Year,
        description: movie._source.Overview,
        thumbnail: movie._source.Poster_Link,
        icon: "/movie.svg",
        icon_color: "bg-purple-500",
        rating: movie._source.IMDB_Rating,
        rating_count: movie._source.No_of_Votes,
      }}
      fullResult={movie}
      max_rating={10}
      title_key="Series_Title"
      description_key="Overview"
    />
  );
}
