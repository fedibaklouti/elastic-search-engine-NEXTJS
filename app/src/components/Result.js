import BookResult from "./BookResult";
import MovieResult from "./MovieResult";

export default function Result({ result, query }) {
  switch (result._index) {
    case "movies":
      return <MovieResult movie={result} query={query} />;
    case "books":
      return <BookResult book={result} query={query} />;
    default:
      return null;
  }
}
