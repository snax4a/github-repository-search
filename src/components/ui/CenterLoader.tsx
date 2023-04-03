import LoadingDots from "@/components/ui/LoadingDots";

export default function CenterLoader() {
  return (
    <div className="flex h-full w-full items-center justify-center py-16 text-blue-500">
      <LoadingDots />
    </div>
  );
}
