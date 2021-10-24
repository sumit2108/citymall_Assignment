import { React, useState } from "react";

const Header = (props) => {


  function handleAddRow() {
    
    let addNewRowKey = props.addNewRow;
    addNewRowKey.id =props.data.rows.length+1 ;
    console.log(addNewRowKey);

    let newData = props.data.rows;
    newData.push(addNewRowKey);

    props.setData({ rows: newData });
    console.log(props.data);
    props.gridApi.setRowData(props.data.rows);
  }

  function selectedDeleteHandler() {
    props.gridApi.applyTransaction({ remove: props.selectedRows });
  }

  function nonSelectedDeleteHandler() {

    let selected=props.selectedRows;
    
    let arr=props.data.rows;
    selected.map((item)=>{
       arr=arr.filter((value=>item.id!==value.id))
       
    })
    props.gridApi.applyTransaction({ remove: arr });
    
  }

  return (
    <div className="header">
      <button onClick={handleAddRow}>Add Row</button>
      <button onClick={selectedDeleteHandler}>Delete Selected Rows</button>
      <button onClick={nonSelectedDeleteHandler}>
        
        Delete Non Selected Rows
      </button>
      <button> Submit</button>
    </div>
  );
};

export default Header;
