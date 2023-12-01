// =============================

import React, { useEffect, useState } from "react";
import "../styles/Grid.css";
const Grid = ({ data, removeItemFromBag, AddToBag }) => {
  const [columns, setColumns] = useState("[{}]");
  const [columnReady, setColumnReady] = useState(false);

  //This is triggered on page load
  useEffect(() => {
    setColumns(createColumns(data[0]));
  }, []);

  //This function creates the header of the table
  const createColumns = (data) => {
    const columnsData = Object.keys(data).map((key) => {
      return {
        field: key,
        header: key.charAt(0).toUpperCase() + key.slice(1),
      };
    });
    setColumnReady(true);
    return columnsData;
  };

  //This function is used to create the table rows
  const renderTableCell = (row, col) => {
    if (col.field === "productImage") {
      return <td dangerouslySetInnerHTML={{ __html: row[col.field] }} />;
    } else if (col.field === "product_Action") {
      return (
        <td>
          <div className="remove-add-button">
            <i
              class="fa-solid fa-circle-minus"
              onClick={() => removeItemFromBag(row.orderId, row.orderIndex)}
            ></i>
            <div>{row.product_Count}</div>
            <i
              class="fa-solid fa-circle-plus"
              onClick={() =>
                AddToBag(row.orderId, row.productPrice, row.productName)
              }
            ></i>
          </div>
        </td>
      );
    }

    return <td>{row[col.field]}</td>;
  };

  return (
    <>
      {columnReady && (
        <div className="grid">
          <table className="tableCore">
            <thead className="tableHeading">
              <tr className="tableHeaderRow">
                {columns.map((col) => (
                  <th>{col.header}</th>
                ))}
              </tr>
            </thead>
            <tbody className="tableBody">
              {data.map((row) => (
                <tr>{columns.map((col) => renderTableCell(row, col))}</tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Grid;
