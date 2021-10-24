import React from 'react'
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
const StaticTable = (props) => {
    return (
        <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
        <AgGridReact
          rowData={props.rows}
          columnDefs={props.columns}
          />
      </div>
    )
}

export default StaticTable
