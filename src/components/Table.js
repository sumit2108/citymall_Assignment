import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
const Table = (props) => {
  let rowSelectionType = "multiple";

  function onSelectionChange(e) {
    props.setSelectedRows(e.api.getSelectedRows());
   
    
  }
  function gridReady(params) {
    props.setgridApi(params.api);
  }
 
  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
      <AgGridReact
        rowData={props.rows}
        columnDefs={props.columns}
        rowSelection={rowSelectionType}
        onSelectionChanged={onSelectionChange}
        onGridReady={gridReady}
        
        
      />
    </div>
  );
};

export default Table;
