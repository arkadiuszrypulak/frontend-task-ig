import React from "react";

const TableData = ({ data }) => {
  return (
    <tbody>
      {data.map((el) => (
        <tr key={el._id}>
          <td>{el.name}</td>
          <td>{el.profitLoss}</td>
          <td>{el.accountType}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableData;
