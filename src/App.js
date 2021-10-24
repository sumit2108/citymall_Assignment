import "./App.css";
import Table from "./components/Table";
import Header from "./components/Header";
import { useState,useEffect } from "react";
import StaticTable from "./components/StaticTable";
const rows = [
  {
    id: 1,
    name: "Sumit",
    email: "mastersumit@gmail.com",
    city: "kanpur",
    
  },
  {
    id: 2,
    name: "Mohit",
    email: "mastermohit@gmail.com",
    city: "kanpur",
    
  },
  {
    id: 3,
    name: "Sourabh",
    email: "mastersourabh@gmail.com",
    city: "kanpur",
  },
];

function App() {

  useEffect(() => {
    getLocalData()
   
  }, [])

  let addNewRow = {
    id: "id",
    name: "",
    email: "",
    gender: "",
    dob: "",
    country: "",
    city: "",
    
  };



  const columns = [
    {
      headerName: "Id",
      field: "id",
      sortable: true,
      editable: true,
      checkboxSelection: true,
      cellStyle:cellStyles
      
    },
    { headerName: "Name", field: "name", sortable: true, editable: true ,cellStyle:cellStyles
  
  },
    { headerName: "Email", field: "email", sortable: true, editable: true, cellStyle:cellStylesYellow},
    {
      headerName: "Gender",
      field: "gender",
      editable: true,
      cellRendererFramework: (para) => (
        <div>
          <select  name="gender">
            <option >Male</option>
            <option >Female</option>
          </select>
        </div>
      ),
    },

    {
      headerName: "DOB",
      field: "dob",
      editable: true,

      cellRendererFramework: (para) => (
        <div>
          <input type="date" name="date"  />
        </div>
      ),
    },



    { headerName: "Country", field: "country", sortable: true, editable: true ,
    cellRendererFramework: (para) => (
      <div>
        <select name="gender">
          <option >India</option>
          <option >Russia</option>
          <option > Japan</option>
        </select>
      </div>
    ),},




    {
      headerName: "City",
      field: "city",
      sortable: true,
      editable: true,
      cellStyle:cellStyles
      
    },

    {
      headerName: "",
      field: "",
      cellRendererFramework: (para) => (
        <div>
          
          <i
          className="far fa-trash-alt"
            onClick={() => {
              let newRows = data.rows.filter(
                (item) => item.id !== para.data.id
              );
              setData({ ...data, rows: newRows });
              console.log(data);
            }}
          >
            
          </i>
        </div>
      ),
    },
  ];

  const nonEditableColumns = [
    {
      headerName: "Id",
      field: "id",
      sortable: true,
      editable: true,
    },
    { headerName: "Name", field: "name", sortable: true, },
    { headerName: "Email", field: "email", sortable: true, },
    {
      headerName: "Gender",
      field: "gender",
    },

    {
      headerName: "DOB",
      field: "dob",
    },



    { headerName: "Country", field: "country", sortable: true,},




    {
      headerName: "City",
      field: "city",
      sortable: true,
    },

    
  ];

  
  let [data, setData] = useState({
    rows: rows,
  });

  let [gridApi, setgridApi] = useState([]);

  let [selectedRows, setSelectedRows] = useState([]);


  let[staticData,setStaticData]=useState({columns:[],rows:[]})
  // console.log(gridApi)
let[submit,setSubmit]=useState(false)
  const [nonEditableRows,setNonEditableRows]=useState([])
  
  
  

  function cellStyles(params){
    
    if(params.value===""&&submit===true){
      return {background:"red"}
    }
  }

  
  function cellStylesYellow(params){
    if(params.value==="" &&submit===true){
      return {background:"yellow"}
    }
  }


  const getLocalData=()=>{
    if(localStorage.getItem('data')===null){
      localStorage.setItem('data',JSON.stringify([]))
    }else{
     let localData=JSON.parse(localStorage.getItem('data'))
     setStaticData(localData)
    }
    }
    

  return (
    <div className="App">
      <Header
        
        setData={setData}
        data={data}
        addNewRow={addNewRow}
        gridApi={gridApi}
        selectedRows={selectedRows}
        setSelectedRows={setSelectedRows}
        nonEditableColumns={nonEditableColumns}
        setStaticData={setStaticData}
        staticData={staticData}
        nonEditableRows={nonEditableRows}
        setNonEditableRows={setNonEditableRows}
        setSubmit={setSubmit}
      />

      <Table
        setSelectedRows={setSelectedRows}
        rows={data.rows}
        columns={columns}
        setgridApi={setgridApi}
      />

     <h1>Submitted Grid</h1>

     <StaticTable
      rows={staticData.rows}
      columns={staticData.columns}
     />

    </div>
  );
}

export default App;
