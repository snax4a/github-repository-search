import { ChevronLeft, ChevronRight } from "lucide-react";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

import {
  selectHasNextPage,
  selectHasPrevPage,
  selectSearchQuery,
  setNextPage,
  setPrevPage,
} from "@/features/repositories/repositoriesSlice";
import { useAppDispatch, useTypedSelector } from "@/store";

import ResultsCount from "./ResultsCount";
import SearchQueryForm from "../SearchQueryForm";
import RepositoriesTable from "../RepositoriesTable";

export default function RepositoriesCard() {
  const query = useTypedSelector(selectSearchQuery);
  const isQueryEmpty = query === "";

  return (
    <Card className="mx-auto w-full max-w-full md:w-[70rem]">
      <RepositoriesCardHeader showForm={!isQueryEmpty} />
      {isQueryEmpty ? <EmptyQueryState /> : <RepositoriesTable />}
      <RepositoriesCardFooter showPagination={!isQueryEmpty} />
    </Card>
  );
}

function EmptyQueryState() {
  return (
    <div className="w-full py-16 text-center">
      <div className="mb-8 text-4xl font-bold text-gray-800">
        Type something to search
      </div>
      <SearchQueryForm />
    </div>
  );
}

function RepositoriesCardHeader({ showForm = false }) {
  return (
    <Card.Header className="grid gap-3 md:flex md:items-center md:justify-between">
      <div>
        <h2 className="text-xl font-semibold text-gray-800">Repositories</h2>
        <p className="text-sm text-gray-600">
          Search, filter, and browse through github repositories
        </p>
      </div>

      {showForm && <SearchQueryForm />}
    </Card.Header>
  );
}

function RepositoriesCardFooter({ showPagination = false }) {
  const dispatch = useAppDispatch();
  const hasNextPage = useTypedSelector(selectHasNextPage);
  const hasPrevPage = useTypedSelector(selectHasPrevPage);

  const onPrevClick = () => dispatch(setPrevPage());
  const onNextClick = () => dispatch(setNextPage());

  return (
    <Card.Footer className="grid gap-3 md:flex md:items-center md:justify-between">
      <ResultsCount />

      {showPagination ? (
        <div className="inline-flex gap-x-2">
          <Button
            variant="outline"
            onClick={onPrevClick}
            disabled={!hasPrevPage}
          >
            <ChevronLeft className="mr-2 h-4 w-4" /> Prev
          </Button>

          <Button
            variant="outline"
            onClick={onNextClick}
            disabled={!hasNextPage}
          >
            Next <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      ) : (
        <div className="h-10" />
      )}
    </Card.Footer>
  );
}
