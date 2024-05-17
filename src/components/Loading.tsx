export function Loading() {
  return (
    <div className="flex flex-col gap-4 mt-4">
      <div className="skeleton w-[300px] h-[290px]"></div>
      <div className="flex justify-between">
        <div className="skeleton h-4 w-32"></div>
        <div className="skeleton h-4 w-12"></div>
      </div>
      <div className="skeleton h-4 w-20"></div>
    </div>
  );
}
