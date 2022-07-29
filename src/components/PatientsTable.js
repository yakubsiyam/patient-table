import React, { useMemo } from "react";
import { useTable, useGlobalFilter, useFilters, useSortBy } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./column";
import ColumnFilter from "./ColumnFilter";

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

  return (
    <div>
      <section class="py-4">
        <h5 class="text-gold py-2 fw-bold">Batching Claim(s)</h5>
        <div class="row">
          <div class="col-xl-7 col-md-10 row justify-content-around">
            <div class="col-md-3">
              <div class="input-group">
                <p class="fw-bolder w-100 my-2">Sort By</p>
                <select class="form-select" id="columnName">
                  <option value="1">Id</option>
                  <option value="2" selected>
                    Patients
                  </option>
                  <option value="3">Treating Therapist</option>
                  <option value="4">Amount</option>
                  <option value="5">Date</option>
                  <option value="6">Country</option>
                </select>
              </div>
            </div>
            <div class="col-md-5">
              <div class="input-group">
                <p class="fw-bolder w-100 my-2">Patient(s)</p>
                <select class="form-select" id="patientName">
                  <option value="1" selected>
                    Domeniga Minmagh
                  </option>
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
            <div class="col-md-4">
              <div class="input-group">
                <p class="fw-bolder w-100 my-2">To Date</p>
                <input class="form-select" type="date" required />
              </div>
            </div>
          </div>
          <div class="col-xl-5">
            <p class="my-2 w-100 invisible">space</p>
            <button class="btn btn-primary me-1">Go</button>
            <button class="btn btn-danger me-1">Cancel</button>
            <button class="btn btn-dark me-1" disabled>
              Generate Batch
            </button>
            <button class="btn btn-primary">Generate CSV</button>
          </div>
        </div>
      </section>
      <h5 class="text-gold py-2 fw-bold">Private Claims</h5>
      <table {...getTableProps()} class="table table-bordered">
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
                    {column.isSorted ? (column.isSortedDesc ? "🔽" : "🔼") : ""}
                  </span>
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
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
  );
};

export default FilteringTable;
