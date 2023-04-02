import Image from "next/image";
import ArrowLink from "@/components/ui/links/ArrowLink";
import Button from "@/components/ui/Button";

import { formatRelativePastTime } from "@/lib/utils";
import cn from "@/lib/classnames";

import SortIndicator from "./SortIndicator";
import StarCount from "./StarCount";

interface TableHeaderCellProps {
  name: string;
  className?: string;
  onSortChange?: (name: string) => void;
}

function TableHeaderCell({
  name,
  className,
  onSortChange,
}: TableHeaderCellProps) {
  return (
    <th scope="col" className={cn("px-6 py-3 text-left", className)}>
      <Button
        variant="naked"
        className="group gap-x-2 p-0"
        onClick={() => onSortChange?.(name)}
      >
        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
          {name}
        </span>
        <SortIndicator />
      </Button>
    </th>
  );
}

interface TableDataCellProps {
  children: React.ReactNode;
  className?: string;
  whitespaceWrap?: boolean;
}

function TableDataCell({
  children,
  className,
  whitespaceWrap = false,
}: TableDataCellProps) {
  return (
    <td
      className={cn("h-px w-px", className, {
        "whitespace-nowrap": !whitespaceWrap,
      })}
    >
      <div className="px-6 py-2">{children}</div>
    </td>
  );
}

export default function RepositoriesTable() {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <TableHeaderCell name="Name" />
          <TableHeaderCell name="Description" className="w-72" />
          <TableHeaderCell name="Stars" />
          <TableHeaderCell name="Owner" />
          <TableHeaderCell name="Updated" />
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        <tr className="bg-white hover:bg-gray-50">
          <TableDataCell>
            <ArrowLink href="#">react-tetris</ArrowLink>
          </TableDataCell>
          <TableDataCell whitespaceWrap>
            <p className="text-sm text-gray-500">
              Augmented Reality Tetris made with ARKit and SceneKit
            </p>
          </TableDataCell>
          <TableDataCell>
            <StarCount count={7522} />
          </TableDataCell>
          <TableDataCell>
            <Image
              width={24}
              height={24}
              className="mr-2 inline-flex rounded-full align-middle ring-2 ring-white"
              src="https://avatars.githubusercontent.com/u/6587532?v=4"
              alt="Image Description"
            />
            <span className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800">
              David Harrison
            </span>
          </TableDataCell>
          <TableDataCell className="text-sm">
            {formatRelativePastTime("2023-03-01T08:41:03Z")}
          </TableDataCell>
        </tr>
      </tbody>
    </table>
  );
}
