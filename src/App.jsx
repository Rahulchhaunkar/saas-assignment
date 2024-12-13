import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import TableComponent from "./components/Table";
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
    <>
      {/* {data && (
        <table>
          <thead>
            <tr>
              <th>Expand/Collapse</th>
              
            </tr>
          </thead>
          <tbody>
            {data?.map((data) => (
              <td >
                
                <tr>
                  <div className="data-box">
                    
                  </div>
                </tr>
              </td>
            ))}
          </tbody>
        </table>
      )} */}
      <TableComponent data={data} />
    </>
  );
}

export default App;
