import { Search } from "lucide-react";

import { useAppDispatch } from "@/store";
import { setQuery } from "@/features/repositories/repositoriesSlice";

import Button from "@/components/ui/Button";

export default function SearchQueryForm() {
  const dispatch = useAppDispatch();

  const onSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const query = formData.get("query") as string;

    dispatch(setQuery(query));
  };

  return (
    <form className="inline-flex gap-x-3" onSubmit={onSubmitSearch}>
      <div className="relative">
        <label htmlFor="query" className="sr-only">
          Search repositories
        </label>
        <input
          type="text"
          id="query"
          name="query"
          required
          maxLength={256}
          className="block w-full rounded-md border border-gray-200 px-3 py-2.5 pl-11 text-sm shadow-sm transition-all focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Search repositories"
        />
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
          <Search className="mr-2 h-4 w-4 text-gray-400" />
        </div>
      </div>
      <Button type="submit">Search</Button>
    </form>
  );
}
