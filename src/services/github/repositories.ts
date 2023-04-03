import { parsePaginatedResponseHeaders } from "@/services/github/utils";
import { type Repository } from "./types";
import { api } from "./api";

type SearchRepositoriesResponse = {
  items: Repository[];
  total_count: number;
  incomplete_results: boolean;
  has_next_page: boolean;
  last_page_number?: number;
};

export type SearchParams = {
  q: string;
  sort: "stars" | "forks" | "help-wanted-issues" | "updated";
  order: "asc" | "desc";
  per_page: string;
  page: string;
};

export const repositoriesApi = api.injectEndpoints({
  endpoints: (build) => ({
    searchRepositories: build.query<SearchRepositoriesResponse, SearchParams>({
      query: (searchParams) => ({
        url: `repositories?${new URLSearchParams(searchParams).toString()}`,
      }),
      transformResponse(response: SearchRepositoriesResponse, meta) {
        return {
          ...response,
          ...parsePaginatedResponseHeaders(meta?.response?.headers),
        };
      },
    }),
  }),
});

export const { useSearchRepositoriesQuery } = repositoriesApi;
