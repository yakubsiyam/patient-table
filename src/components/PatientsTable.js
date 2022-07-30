import React, { useMemo, useState } from "react";
import { useTable, useGlobalFilter, useFilters, useSortBy } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./column";
import ColumnFilter from "./ColumnFilter";
import { set } from "date-fns";

const FilteringTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const defaultColumn = useMemo(() => {
    return {
      Filter: ColumnFilter,
    };
  }, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
        defaultColumn,
      },
      useGlobalFilter,
      useFilters,
      useSortBy
    );

  let [visibility, setVisibility] = useState({
    patientVisibility: "invisible",
    dateVisibility: "invisible",
    btnVisibility: "invisible",
    tableVisibility: "invisible",
  });

  const handleSort = (e) => {
    const sortValue = e.target.value;
    if (sortValue != "-1") {
      setVisibility({
        patientVisibility: "visible",
        dateVisibility: "invisible",
        btnVisibility: "invisible",
        tableVisibility: "invisible",
      });
    } else {
      setVisibility({
        patientVisibility: "invisible",
        dateVisibility: "invisible",
        btnVisibility: "invisible",
        tableVisibility: "invisible",
      });
    }
  };
  const handlePatient = (e) => {
    const patientValue = e.target.value;
    if (patientValue != "-1") {
      setVisibility({
        patientVisibility: "visible",
        dateVisibility: "visible",
        btnVisibility: "invisible",
        tableVisibility: "invisible",
      });
    } else {
      setVisibility({
        patientVisibility: "visible",
        dateVisibility: "invisible",
        btnVisibility: "invisible",
        tableVisibility: "invisible",
      });
    }
  };
  const handleDate = () => {
    setVisibility({
      patientVisibility: "visible",
      dateVisibility: "visible",
      btnVisibility: "visible",
      tableVisibility: "invisible",
    });
  };
  const handleSubmit = () => {
    setVisibility({
      patientVisibility: "visible",
      dateVisibility: "visible",
      btnVisibility: "visible",
      tableVisibility: "visible",
    });
  };

  return (
    <div>
      <section className="py-4">
        <h5 className="text-gold py-2 fw-bold">Batching Claim(s)</h5>
        <div className="row">
          <div className="col-xl-7 col-md-10 row justify-content-around">
            <div className="col-md-3">
              <div className="input-group">
                <p className="fw-bolder w-100 my-2">Sort By</p>
                <select
                  className="form-select"
                  id="columnName"
                  onChange={handleSort}
                >
                  <option value="-1">Select...</option>
                  <option value="1">Id</option>
                  <option value="2">Patients</option>
                  <option value="3">Treating Therapist</option>
                  <option value="4">Amount</option>
                  <option value="5">Date</option>
                  <option value="6">Country</option>
                </select>
              </div>
            </div>
            <div className={`col-md-5 ${visibility.patientVisibility}`}>
              <div className="input-group">
                <p className="fw-bolder w-100 my-2">Patient(s)</p>
                <select
                  className="form-select"
                  id="patientName"
                  onChange={handlePatient}
                >
                  <option value="-1">Select...</option>
                  <option value="1">Domeniga Minmagh</option>
                  <option value="2">Jasmine Rawsen</option>
                  <option value="3">Elysia Briars</option>
                  <option value="4">Tani Kimmins</option>
                  <option value="5">Kelcey Wormell</option>
                  <option value="6">Melesa List</option>
                  <option value="7">Miller Lawerence</option>
                  <option value="8">Gianna Maywood</option>
                  <option value="9">Dulcia Seilmann</option>
                  <option value="10">Cybil Godbehere</option>
                </select>
              </div>
            </div>
            <div className={`col-md-4 ${visibility.dateVisibility}`}>
              <div className="input-group">
                <p className="fw-bolder w-100 my-2">To Date</p>
                <input
                  className="form-select"
                  type="date"
                  required
                  onChange={handleDate}
                />
              </div>
            </div>
          </div>
          <div className={`col-xl-5 ${visibility.btnVisibility}`}>
            <p className="my-2 w-100 invisible">space</p>
            <button className="btn btn-primary me-1" onClick={handleSubmit}>
              Go
            </button>
            <button className="btn btn-danger me-1">Cancel</button>
            <button className="btn btn-dark me-1" disabled>
              Generate Batch
            </button>
            <button className="btn btn-primary">Generate CSV</button>
          </div>
        </div>

        <div className={`${visibility.tableVisibility}`}>
          <h5 className="text-gold py-2 fw-bold">Private Claims</h5>
          <table {...getTableProps()} className="table table-bordered">
            <thead className="text-center text-light">
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      scope="col"
                      style={{ backgroundColor: "#089BAB" }}
                    >
                      {column.render("Header")}
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? "🔽"
                            : "🔼"
                          : ""}
                      </span>
                      <div>
                        {column.canFilter ? column.render("Filter") : null}
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default FilteringTable;
