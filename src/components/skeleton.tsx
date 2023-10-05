export const Skeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="flex-1 space-y-6 py-1">
        <div className="space-y-3">
          {Array.from({ length: 3 }).map((_, idx) => (
            <div key={idx} className="grid grid-cols-3 gap-4">
              <div className="h-3 bg-slate-200 rounded col-span-1"></div>
              <div className="h-3 bg-slate-200 rounded col-span-2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
