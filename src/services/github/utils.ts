const lastPagePattern = /&page=([\d]*)(?=>; rel="Last")/i;

export const parsePaginatedResponseHeaders = (headers: Headers | undefined) => {
  const linkHeader = headers?.get("link");
  const lastPageMatch = linkHeader?.match(lastPagePattern);
  const lastPage = Number(lastPageMatch?.[1]);

  return {
    last_page_number: Number.isNaN(lastPage) ? -1 : lastPage,
    has_next_page: Boolean(linkHeader?.includes('rel="next"')),
  };
};
