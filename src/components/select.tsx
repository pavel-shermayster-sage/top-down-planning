import { useState } from "react";
export function Select({
  id,
  items,
  onChange,
}: {
    id: string;
    items: { value: string, label: string }[];
    onChange?: (event: any) => void;
  }) {
  const [selected] = useState(() => { return { id, value: items[0].value } });
  return (
    <select
      name={id}
      id={id}
      onChange={onChange}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option value="select">Select</option>
      {items.map((item) => {
        return (
          <option key={item.value} value={item.value}>{ item.label }</option>
        )
      })};
    </select>
  );
}