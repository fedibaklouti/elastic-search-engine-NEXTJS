import Result from "@/components/Result";
import SearchInput from "@/components/SearchInput";
import Link from "next/link";

const SearchResults = async ({ params: { query, page } }) => {
  const data = await fetch(
    `http://localhost:80/api/search?query=${query}&from=${page}`
  ).then((res) => res.json());

  console.log("data", data?.body);

  console.log(data.results[0]);

  const decodedQuery = decodeURIComponent(query);

  return (
    <main className="flex min-h-screen max-h-screen flex-col items-center  gap-6 p-10">
      <div className="self-start w-1/2  sticky top-4 ">
        <SearchInput defaultValue={decodedQuery} />
      </div>

      <h4 className="w-full">
        {data?.total ? data.total.value + " s" : "S"}earch results for{" "}
        {decodedQuery}.
      </h4>
      <div className="overflow-y-auto w-full flex-1">
        {data
          ? data.results.map((result) => (
              <Result result={result} key={result._id} query={decodedQuery} />
            ))
          : null}
      </div>
      <div className="flex">
        <div className="w-4">
          {parseInt(page) > 1 && (
            <Link href={`/${query}/${parseInt(page) - 1}`}>
              <button>{"<-"}</button>
            </Link>
          )}
        </div>
        <h4 className="mx-4">Page {page}</h4>
        <div className="w-4">
          {parseInt(page) * 10 < data.total.value && (
            <Link href={`/${query}/${parseInt(page) + 1}`}>
              <button>{"->"}</button>
            </Link>
          )}
        </div>
      </div>
    </main>
  );
};

export default SearchResults;
