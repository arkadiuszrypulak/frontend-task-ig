import React, { useEffect, useState } from "react";
import TableHead from "../atoms/TableHead/TableHead";
import TableData from "../atoms/TableData/TableData";
import Table from "../atoms/Table/Table";
import LoadingSpinner from "../atoms/LoadingSpinner/LoadingSpinner";
import axios from "axios";

const TableView = () => {
  const [dataAcc, setDataAcc] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      const data = await axios
        .get("https://recruitmentdb-508d.restdb.io/rest/accounts", {
          headers: {
            "x-apikey": "5d9f48133cbe87164d4bb12c",
          },
        })
        .then((res) => {
          let filteredName = [];
          res.data.forEach((el) => {
            if (el.name !== undefined) {
              filteredName.push(el);
            }
          });
          setDataAcc(filteredName);
        });
      setLoading(true);
      return [data];
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {!loading ? (
        <LoadingSpinner />
      ) : (
        <Table>
          <TableHead />
          <TableData data={dataAcc} />
        </Table>
      )}
    </>
  );
};

export default TableView;
