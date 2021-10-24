import { React } from "react";

const Header = (props) => {



  function handleAddRow() {
    let addNewRowKey = props.addNewRow;
    addNewRowKey.id = props.data.rows.length + 1;
  

    let newData = props.data.rows;
    newData.push(addNewRowKey);

    props.setData({ rows: newData });
 
    props.gridApi.setRowData(props.data.rows);
  }

  function selectedDeleteHandler() {
    props.gridApi.applyTransaction({ remove: props.selectedRows });
  }

  function nonSelectedDeleteHandler() {
    let selected = props.selectedRows;

    let arr = props.data.rows;
    selected.map((item) => {
      arr = arr.filter((value) => item.id !== value.id);
      return item
    });
    props.gridApi.applyTransaction({ remove: arr });
  }
function handleSubmit(){
  props.setSubmit(true)
  let rowNodes=[];
  props.gridApi.forEachNode((item)=>{
    rowNodes.push(item.data)
    props.setNonEditableRows(rowNodes)
  })
 
  props.setStaticData({columns:props.nonEditableColumns,rows:props.nonEditableRows})
  props.setData({rows:props.staticData})
  setLocalData()
}

const setLocalData=()=>{
  localStorage.setItem('data',JSON.stringify(props.staticData))
};




  return (
    <div className="header">
      <button onClick={handleAddRow}>Add Row</button>
      <button onClick={selectedDeleteHandler}>Delete Selected Rows</button>
      <button onClick={nonSelectedDeleteHandler}>
        Delete Non Selected Rows
      </button>
      <button onClick={handleSubmit}> Submit</button>
    </div>
  );
};

export default Header;
