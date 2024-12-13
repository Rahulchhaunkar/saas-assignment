import React, { useState } from "react";
import "./Table.css";

const TableComponent = ({ data }) => {
  const [expandedRow, setExpandedRow] = useState(null);

  const toggleExpand = (index) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  return (
    <div className="table-container">
      <table className="custom-table" aria-label="Data Table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Percentage Funded</th>
            <th>Amount Pledged</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((info, index) => (
            <React.Fragment key={info["s.no"]}>
              <tr>
                <td>{info["s.no"]}</td>
                <td>{info["percentage.funded"]}</td>
                <td>{info["amt.pledged"]}</td>
                <td>
                  <button
                    onClick={() => toggleExpand(index)}
                    aria-expanded={expandedRow === index}
                    aria-controls={`expandable-content-${index}`}
                  >
                    {expandedRow === index ? "Collapse" : "Expand"}
                  </button>
                </td>
              </tr>
              <tr
                id={`expandable-content-${index}`}
                className={`expandable-row ${
                  expandedRow === index ? "expanded" : "collapsed"
                }`}
              >
                <td colSpan="4">
                  <div
                    className={`hidden-content ${
                      expandedRow === index ? "show" : ""
                    }`}
                  >
                    <div className="grid-container">
                      {Object.entries(info).map(([name, value]) => (
                        <div key={name} className="grid-item">
                          <div className="item-name">
                            {name?.replaceAll(".", " ")}
                          </div>
                          <div className="item-value">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
