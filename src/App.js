import "./App.css";
import Table from "./components/Table";
import Header from "./components/Header";
import { useState } from "react";
const rows = [
  {
    id: 1,
    name: "Sumit",
    email: "mastersumit@gmail.com",
    gender: "male",
    dob: 24,
    country: "india",
    city: "kanpur",
    
  },
  {
    id: 2,
    name: "Mohit",
    email: "mastermohit@gmail.com",
    gender: "male",
    dob: 24,
    country: "india",
    city: "kanpur",
    
  },
  {
    id: 3,
    name: "Sourabh",
    email: "mastersourabh@gmail.com",
    gender: "male",
    dob: 24,
    country: "pakistan",
    city: "kanpur",
    
  },
];

function App() {
  let addNewRow = {
    id: "id",
    name: "Name",
    email: "Email",
    gender: "Gender",
    dob: 24,
    country: "Country",
    city: "City",
    key: "key",
  };

  // Id (input)
  // • Name (input)
  // • Email, (input)
  // • Gender, (dropdown)
  // • DOB, (datepicker)
  // • Country (dropdown)
  // • City, (dropdown)
  const columns = [
    {
      headerName: "Id",
      field: "id",
      sortable: true,
      editable: true,
      checkboxSelection: true,
    },
    { headerName: "Name", field: "name", sortable: true, editable: true },
    { headerName: "Email", field: "email", sortable: true, editable: true },
    {
      headerName: "Gender",
      field: "gender",
      editable: true,
      cellRendererFramework: (para) => (
        <div>
          <select name="gender">
            <option value="">Male</option>
            <option value="">Female</option>
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
          <option value="">India</option>
          <option value="">Russia</option>
          <option value=""> Japan</option>
        </select>
      </div>
    ),},




    {
      headerName: "City",
      field: "city",
      sortable: true,
      editable: true,

      
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

  let [data, setData] = useState({
    rows: rows,
  });

  let [gridApi, setgridApi] = useState(null);

  let [selectedRows, setSelectedRows] = useState([]);

  // console.log(gridApi)

  return (
    <div className="App">
      <Header
        
        setData={setData}
        data={data}
        addNewRow={addNewRow}
        gridApi={gridApi}
        selectedRows={selectedRows}
        setSelectedRows={setSelectedRows}
      />

      <Table
        setSelectedRows={setSelectedRows}
        rows={data.rows}
        columns={columns}
        setgridApi={setgridApi}
      />

     <h1>Submitted Grid</h1>

     

    </div>
  );
}

export default App;
