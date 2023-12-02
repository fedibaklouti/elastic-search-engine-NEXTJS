import Image from "next/image";
import BaseResult from "./BaseResult";

export default function BookResult({ book, query }) {
  return (
    <BaseResult
      result={{
        title: book._source.title,
        year: book._source.published_year,
        description: book._source.description,
        thumbnail: book._source.thumbnail,
        icon: "/auto_stories.svg",
        icon_color: "bg-red-500",
        rating: book._source.average_rating,
        rating_count: book._source.ratings_count,
      }}
      max_rating={5}
      fullResult={book}
      title_key="title"
      description_key="description"
    />
  );
}
