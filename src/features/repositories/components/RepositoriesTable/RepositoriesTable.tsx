import Image from "next/image";
import ArrowLink from "@/components/ui/links/ArrowLink";
import Button from "@/components/ui/Button";
import CenterLoader from "@/components/ui/CenterLoader";

import cn from "@/lib/classnames";
import { useAppDispatch, useTypedSelector } from "@/store";
import { formatRelativePastTime, truncate } from "@/lib/utils";
import {
  type SearchParams,
  useSearchRepositoriesQuery,
} from "@/services/github/repositories";
import {
  selectRepositorySearchParams,
  selectSortBy,
  selectSortDirection,
  setSortBy,
} from "@/features/repositories/repositoriesSlice";

import SortIndicator from "./SortIndicator";
import StarCount from "./StarCount";
import NoResultsFound from "./NoResultsFound";
import SomethingWentWrong from "./SomethingWentWrong";

interface TableHeaderCellProps {
  name: string;
  className?: string;
  sortKey?: SearchParams["sort"];
}

function TableHeaderCell({ name, className, sortKey }: TableHeaderCellProps) {
  const dispatch = useAppDispatch();
  const sortBy = useTypedSelector(selectSortBy);
  const sortDirection = useTypedSelector(selectSortDirection);
  const sortIndicatorVariant = sortBy === sortKey ? sortDirection : "default";
  const onClick = () => sortKey && dispatch(setSortBy(sortKey));

  return (
    <th scope="col" className={cn("px-6 py-3 text-left", className)}>
      {sortKey ? (
        <Button variant="naked" className="group gap-x-2 p-0" onClick={onClick}>
          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
            {name}
          </span>
          <SortIndicator variant={sortIndicatorVariant} />
        </Button>
      ) : (
        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
          {name}
        </span>
      )}
    </th>
  );
}

interface TableDataCellProps {
  children: React.ReactNode;
  className?: string;
}

function TableDataCell({ children, className }: TableDataCellProps) {
  return (
    <td className={cn("h-px w-px whitespace-nowrap", className)}>
      <div className="px-6 py-2">{children}</div>
    </td>
  );
}

export default function RepositoriesTable() {
  const searchParams = useTypedSelector(selectRepositorySearchParams);
  const { data, isLoading, isError } = useSearchRepositoriesQuery(searchParams);

  if (isLoading) return <CenterLoader />;
  if (isError) return <SomethingWentWrong />;
  if (!data || data.items.length === 0) return <NoResultsFound />;

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <TableHeaderCell name="Name" />
          <TableHeaderCell name="Description" className="w-80" />
          <TableHeaderCell name="Stars" sortKey="stars" />
          <TableHeaderCell name="Owner" />
          <TableHeaderCell name="Updated" sortKey="updated" />
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-200">
        {data.items.map((repository) => (
          <tr key={repository.id} className="bg-white hover:bg-gray-50">
            <TableDataCell>
              <ArrowLink href={repository.html_url}>
                {truncate(repository.name, 30)}
              </ArrowLink>
            </TableDataCell>
            <TableDataCell>
              <p className="whitespace-normal text-sm text-gray-500">
                {truncate(repository.description ?? "", 300)}
              </p>
            </TableDataCell>
            <TableDataCell>
              <StarCount count={repository.stargazers_count} />
            </TableDataCell>
            <TableDataCell>
              <Image
                width={24}
                height={24}
                src={repository.owner.avatar_url}
                alt={`Avatar of ${repository.owner.login}`}
                className="mr-2 inline-flex rounded-full align-middle ring-2 ring-white"
              />
              <span className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800">
                {repository.owner.login}
              </span>
            </TableDataCell>
            <TableDataCell className="text-sm">
              {formatRelativePastTime(repository.updated_at)}
            </TableDataCell>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
