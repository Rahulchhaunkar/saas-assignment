import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import TableComponent from "./components/Table";
import Navbar from "./components/Navbar";
function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json"
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((data) => setData(data));
    };
    fetchData();
  }, []);

  return (
    <div >
      <Navbar />
      <h2 style={{textAlign:"center",margin:"10px 10px"}}>Data Table</h2>
      <TableComponent data={data} />
    </div>
  );
}

export default App;
