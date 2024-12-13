import React, { useState } from "react";
import "./Table.css";
import Pagination from "./Pagination";



const TableComponent = ({ data }) => {
  const [expandedRow, setExpandedRow] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const totalPages = Math.ceil(data?.length / pageSize);

  const toggleExpand = (index) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  const onPageChange = (page) => {
    setExpandedRow(null);
    setCurrentPage(page);
  };

  const paginatedData = data?.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

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
          {paginatedData?.map((info, index) => (
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
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default TableComponent;
