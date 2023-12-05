/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Ratings from "./Ratings";

export default function BaseResult({
  result,
  fullResult,
  title_key,
  description_key,
  max_rating,
}) {
  const title = fullResult?.highlight?.[title_key]
    ? fullResult?.highlight[title_key]
    : result.title;

  const description = fullResult?.highlight?.[description_key]
    ? fullResult?.highlight[description_key]
    : result.description;

  return (
    <div className="flex row-auto gap-5 w-full mb-10 ">
      <img
        src={result.thumbnail}
        alt={result.title}
        width={60}
        height={60}
        className="h-auto min-w-[60px] w-[60px] object-contain"
      />
      <div className="max-w-fit overflow-hidden truncate... ">
        <div className="flex  items-start mb-2 md:items-center ">
          <div
            className={`${result.icon_color} rounded-full mr-2 aspect-square flex justify-center align-middle
          h-12 w-12`}
          >
            <Image src={result.icon} width={24} height={24} alt={""} />
          </div>
          <div>
            <h1
              className="font-bold text-lg md:text-xl md:truncate -mb-0"
              dangerouslySetInnerHTML={{
                __html: title + " (" + result.year + ")",
              }}
            />

            <Ratings
              max_rating={max_rating}
              rating={result.rating}
              rating_count={result.rating_count}
            />
          </div>
        </div>
        <p
          className="line-clamp-3"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
}
