import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import "../css/General.css";
import "../css/History.css";
const columns = [
  { id: "time", label: "Time", minWidth: 170 },
  { id: "lux", label: "Light (lux)", minWidth: 100, align: "center" },
  {
    id: "temp",
    label: "Temp (°C)",
    minWidth: 170,
    align: "center",
    format: (value) => value.toFixed(1),
  },
  {
    id: "hmd",
    label: "Humidity (%)",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "co2",
    label: "CO2 (ppm)",
    minWidth: 170,
    align: "center",
    format: (value) => value.toFixed(2),
  },
];

function createData(time, temp, hmd, lux, co2) {
  return { time, temp, hmd, lux, co2 };
}

const rows = [
  createData("13:03", 17.6, 33, 443, 59),
  createData("13:03", 17.6, 33, 443, 59),
  createData("13:03", 17.6, 33, 443, 59),
  createData("13:03", 17.6, 33, 443, 59),
  createData("13:03", 17.6, 33, 443, 59),
  createData("13:03", 17.6, 33, 443, 59),
  createData("13:03", 17.6, 33, 443, 59),
  createData("13:03", 17.6, 33, 443, 59),
  createData("13:03", 17.6, 33, 443, 59),
  createData("13:03", 17.6, 33, 443, 59),
];

export default function StickyHeadTable() {
  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
      }}
    >
      <div className="row bg-light jc-space-around ">
        <p className="varela text-dark"> ⬅️ 19/05</p>
        <p className="varela text-dark">20/05</p>
        <p className="varela text-dark">21/05 ➡️ </p>
      </div>
      <TableContainer
        sx={{
          maxHeight: 300,
          width: "100%",
          backgroundColor: "#F6DCAF",
          fontFamily: "Varela Round",
        }}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    maxWidth: "40%",
                    maxHeight: 30,
                    fontSize: 12,
                    fontFamily: "Varela Round",
                    fontWeight: 400,
                    backgroundColor: "#763D2D",
                    color: "#F6DCAF",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody sx={{ maxHeight: 30, width: "100%" }}>
            {rows.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{
                          maxWidth: "40%",
                          maxHeight: 30,
                          fontSize: 11,
                          fontFamily: "Varela Round",
                        }}
                      >
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </Paper>
  );
}
