export function Select({
  id,
  items
}: {
    id: string;
    items: { value: string, name: string }[];
}) {
  return (
    <select
      name={id}
      id={id}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option value="select">Select</option>
      {items.map((item) => {
        return (
          <option key={item.value} value={item.value}>{ item.name }</option>
        )
      })};
    </select>
  );
}