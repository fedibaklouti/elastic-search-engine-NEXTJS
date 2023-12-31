/* eslint-disable react/no-unescaped-entities */
import SearchInput from "@/components/SearchInput";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-24 xl:p-10">
      <div className="flex-1 flex items-center justify-center flex-col sm:flex-row">
        <div className="">
          <h1>The World's biggest movie and book repository</h1>
          <h2>made by yours truly</h2>
        </div>
        <SearchInput />
      </div>
    </main>
  );
}
