import { SortAsc, SortDesc } from "lucide-react";

interface SortIndicatorProps {
  variant: "default" | "asc" | "desc";
}

const variantIconsMap = {
  default: <DefaultIcon />,
  asc: <SortAsc className="h-4 w-4 text-gray-500" />,
  desc: <SortDesc className="h-4 w-4 text-gray-500" />,
};

export default function SortIndicator({ variant }: SortIndicatorProps) {
  return (
    <div className="flex h-5 w-5 items-center justify-center rounded border border-gray-200 p-1 group-hover:bg-gray-200">
      {variantIconsMap[variant]}
    </div>
  );
}

function DefaultIcon() {
  return (
    <svg
      className="h-2.5 w-2.5 text-gray-400"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.55921 0.287451C7.86808 -0.0958171 8.40096 -0.0958167 8.70982 0.287451L12.9295 5.52367C13.3857 6.08979 13.031 7 12.3542 7H3.91488C3.23806 7 2.88336 6.08979 3.33957 5.52367L7.55921 0.287451Z"
        fill="currentColor"
      />
      <path
        d="M8.70983 15.7125C8.40096 16.0958 7.86808 16.0958 7.55921 15.7125L3.33957 10.4763C2.88336 9.9102 3.23806 9 3.91488 9H12.3542C13.031 9 13.3857 9.9102 12.9295 10.4763L8.70983 15.7125Z"
        fill="currentColor"
      />
    </svg>
  );
}
