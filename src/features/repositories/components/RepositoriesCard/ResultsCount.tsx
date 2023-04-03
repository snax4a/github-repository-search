import {
  selectLastPageNumber,
  selectPerPage,
  setPerPage,
} from "@/features/repositories/repositoriesSlice";
import { useAppDispatch, useTypedSelector } from "@/store";

export default function ResultsCount() {
  const perPage = useTypedSelector(selectPerPage);
  const lastPageNumber = useTypedSelector(selectLastPageNumber);

  if (!perPage || !lastPageNumber) return <div />;

  const totalResults = Number(perPage) * lastPageNumber;

  return (
    <p className="text-sm text-gray-600">
      Showing <PageSizeSelect /> of{" "}
      <span className="font-semibold text-gray-800">{totalResults}</span>{" "}
      results
    </p>
  );
}

function PageSizeSelect() {
  const dispatch = useAppDispatch();
  const perPage = useTypedSelector(selectPerPage);

  const onPageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setPerPage(e.target.value));
  };

  return (
    <select
      value={perPage}
      onChange={onPageSizeChange}
      className="shadow-xs rounded-md border border-gray-300 font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {["10", "20", "40", "50", "100"].map((pageSize) => (
        <option key={pageSize} value={pageSize}>
          {pageSize}
        </option>
      ))}
    </select>
  );
}
