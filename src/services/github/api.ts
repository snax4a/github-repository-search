import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://api.github.com/search/",
  prepareHeaders: (headers) => {
    headers.set("accept", "application/vnd.github+json");
    return headers;
  },
});

export const api = createApi({
  reducerPath: "githubApi",
  baseQuery,
  tagTypes: ["Repositories"],
  endpoints: () => ({}),
});
