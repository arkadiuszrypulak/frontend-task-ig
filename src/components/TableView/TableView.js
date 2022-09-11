import React from "react";
import LoadingSpinner from "../atoms/LoadingSpinner/LoadingSpinner";
import { Wrapper } from "./TableView.styles";
import { useFetch } from "../hooks/useFetch";
import DataTable from "react-data-table-component";
import Warning from "../atoms/Warning/Warning";

const columns = [
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Profit & Loss",
    selector: (row) => row.profitLoss,
    sortable: true,
  },
  {
    name: "AccountType",
    selector: (row) => row.accountType,
  },
];
const TableView = () => {
  const { data, loading, error } = useFetch(
    "https://recruitmentdb-508d.restdb.io/rest/accounts",
    "5d9f48133cbe87164d4bb12c"
  );

  if (error) {
    <Warning />;
  }

  return (
    <Wrapper>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <DataTable columns={columns} data={data} />
      )}
    </Wrapper>
  );
};

export default TableView;
