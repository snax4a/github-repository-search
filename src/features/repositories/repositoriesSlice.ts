import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/store";
import {
  repositoriesApi,
  type SearchParams,
} from "@/services/github/repositories";

type SliceState = {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  lastPageNumber?: number;
  searchParams: SearchParams;
};

// I am intentionally holding page params as strings to make it easier
// to construct URLSearchParams in searchRepositories endpoint definition
const initialState: SliceState = {
  hasNextPage: false,
  hasPrevPage: false,
  lastPageNumber: undefined,
  searchParams: {
    q: "",
    sort: "stars",
    order: "desc",
    per_page: "10",
    page: "1",
  },
};

const slice = createSlice({
  name: "repositories",
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<SearchParams["q"]>) {
      state.searchParams.q = action.payload;
    },
    setSortBy(state, action: PayloadAction<SearchParams["sort"]>) {
      state.searchParams.sort = action.payload;
      state.searchParams.page = "1";

      // If the same sort is selected, change sort direction
      if (state.searchParams.sort === action.payload) {
        state.searchParams.order =
          state.searchParams.order === "asc" ? "desc" : "asc";
      }
    },
    setOrder(state, action: PayloadAction<SearchParams["order"]>) {
      state.searchParams.order = action.payload;
    },
    setPerPage(state, action: PayloadAction<SearchParams["per_page"]>) {
      state.searchParams.per_page = action.payload;
      state.searchParams.page = "1";
    },
    setNextPage(state) {
      if (!state.hasNextPage) return;
      const currentPage = Number(state.searchParams.page);
      state.searchParams.page = String(currentPage + 1);
      state.hasPrevPage = true;
    },
    setPrevPage(state) {
      const currentPage = Number(state.searchParams.page);
      if (currentPage === 1) return;
      if (currentPage === 2) state.hasPrevPage = false;
      state.searchParams.page = String(currentPage - 1);
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      repositoriesApi.endpoints.searchRepositories.matchFulfilled,
      (state, action) => {
        state.hasNextPage = action.payload.has_next_page;
        state.lastPageNumber = action.payload.last_page_number;
      }
    );
  },
});

export const {
  setQuery,
  setSortBy,
  setOrder,
  setPerPage,
  setNextPage,
  setPrevPage,
} = slice.actions;

export default slice.reducer;

export const selectRepositorySearchParams = (state: RootState) =>
  state.repositories.searchParams;

export const selectHasNextPage = (state: RootState) =>
  state.repositories.hasNextPage;

export const selectHasPrevPage = (state: RootState) =>
  state.repositories.hasPrevPage;

export const selectPerPage = (state: RootState) =>
  state.repositories.searchParams.per_page;

export const selectLastPageNumber = (state: RootState) =>
  state.repositories.lastPageNumber;

export const selectSearchQuery = (state: RootState) =>
  state.repositories.searchParams.q;

export const selectSortDirection = (state: RootState) =>
  state.repositories.searchParams.order;

export const selectSortBy = (state: RootState) =>
  state.repositories.searchParams.sort;
