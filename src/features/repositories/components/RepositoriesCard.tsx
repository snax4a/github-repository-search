import { ChevronLeft, ChevronRight, Filter, Search } from "lucide-react";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

import RepositoriesTable from "./RepositoriesTable";

export default function RepositoriesCard() {
  return (
    <Card className="mx-auto max-w-[85rem]">
      <RepositoriesCardHeader />
      <RepositoriesTable />
      <RepositoriesCardFooter />
    </Card>
  );
}

function RepositoriesCardHeader() {
  return (
    <Card.Header className="grid gap-3 md:flex md:items-center md:justify-between">
      <div>
        <h2 className="text-xl font-semibold text-gray-800">Repositories</h2>
        <p className="text-sm text-gray-600">
          Search, filter, and browse through github repositories
        </p>
      </div>
      <div>
        <div className="inline-flex gap-x-2">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" /> Filter
          </Button>
          <Button>
            <Search className="mr-2 h-4 w-4" /> Search
          </Button>
        </div>
      </div>
    </Card.Header>
  );
}

function RepositoriesCardFooter() {
  return (
    <Card.Footer className="grid gap-3 md:flex md:items-center md:justify-between">
      <div>
        <p className="text-sm text-gray-600">
          <span className="font-semibold text-gray-800">6</span> results
        </p>
      </div>
      <div>
        <div className="inline-flex gap-x-2">
          <Button variant="outline">
            <ChevronLeft className="mr-2 h-4 w-4" /> Prev
          </Button>
          <Button variant="outline">
            Next <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card.Footer>
  );
}
