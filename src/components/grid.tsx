"use client";
import { AgGridReact } from "ag-grid-react"; // the AG Grid React Component

import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS

const columnDefs = [
  { field: "make", filter: true },
  { field: "model", filter: true },
  { field: "price" },
];

const defaultColDef = {
  sortable: true,
};
export const Grid = ({ rowData }: { rowData: any[] }) => {
  //   const [rowData, setRowData] = useState(data); // Set rowData to Array of Objects, one Object per Row

  // Each Column Definition results in one Column.

  // DefaultColDef sets props common to all Columns

  return (
    <div>
      {/* On div wrapping Grid a) specify theme CSS Class Class and b) sets Grid size */}
      <div className="ag-theme-alpine" style={{ width: 500, height: 500 }}>
        <AgGridReact
          rowData={rowData} // Row Data for Rows
          columnDefs={columnDefs} // Column Defs for Columns
          defaultColDef={defaultColDef} // Default Column Properties
          animateRows={true} // Optional - set to 'true' to have rows animate when sorted
          rowSelection="multiple" // Options - allows click selection of rows
        />
      </div>
    </div>
  );
};
