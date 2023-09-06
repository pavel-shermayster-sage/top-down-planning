export function Slider({
  id,
  min = 0,
  max = 10,
}: {
  id: string;
  min?: number;
  max?: number;
}) {
  return (
    <input
      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      type="range"
      name="volume"
      min={min}
      max={max}
    />
  );
}
