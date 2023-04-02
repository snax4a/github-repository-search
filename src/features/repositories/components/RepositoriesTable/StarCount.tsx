import { numberFormatter } from "@/lib/utils";
import { Star } from "lucide-react";

interface StarCountProps {
  count: number;
}

export default function StarCount({ count }: StarCountProps) {
  return (
    <div className="inline-flex items-center">
      <Star className="mr-1 h-4 w-4" /> {numberFormatter.format(count)}
    </div>
  );
}
