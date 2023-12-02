const Unvoted = () => {
  return (
    <svg
      className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 20"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
  );
};

const Voted = () => {
  return (
    <svg
      className="w-4 h-4 text-yellow-500 me-1"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 20"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
  );
};

export default function Ratings({ max_rating, rating, rating_count }) {
  const _lowered_rating =
    max_rating === 10 ? parseFloat(rating) / 2.0 : parseFloat(rating);

  return (
    <div className="flex items-center">
      {Array.from({ length: 5 }, (_, i) => {
        return i < +_lowered_rating.toFixed() ? (
          <Voted key={i} />
        ) : (
          <Unvoted key={i} />
        );
      })}
      <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
        {_lowered_rating}
      </p>
      <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
        out of
      </p>
      <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
        5
      </p>
      <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
        ({rating_count} reviews)
      </p>
    </div>
  );
}
