import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "../css/General.css";
import "../css/History.css";
const columns = [
  { id: "time", label: "Time", minWidth: 170 },
  { id: "light", label: "Light (lux)", minWidth: 100, align: "center" },
  {
    id: "temperature",
    label: "Temp (°C)",
    minWidth: 170,
    align: "center",
    format: (value) => value.toFixed(1),
  },
  {
    id: "humidity",
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

// function createData(time, temp, hmd, lux, co2) {
//   return { time, temp, hmd, lux, co2 };
// }

// const rows = [
//   createData("13:03", 17.6, 33, 443, 59),
//   createData("13:03", 17.6, 33, 443, 59),
//   createData("13:03", 17.6, 33, 443, 59),
//   createData("13:03", 17.6, 33, 443, 59),
//   createData("13:03", 17.6, 33, 443, 59),
//   createData("13:03", 17.6, 33, 443, 59),
//   createData("13:03", 17.6, 33, 443, 59),
//   createData("13:03", 17.6, 33, 443, 59),
//   createData("13:03", 17.6, 33, 443, 59),
//   createData("13:03", 17.6, 33, 443, 59),
// ];

export default function StickyHeadTable({ data }) {
  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
      }}
    >
      <div className="row bg-light jc-space-around ">
        <p className="varela text-dark h-xs">
          {data.previousDay !== 0
            ? `⬅️ ${data.previousDay}/0${data.previousMonth}`
            : ""}
        </p>
        <p className="varela text-dark h-sm">{`${data.day}/0${data.month}`}</p>
        <p className="varela text-dark h-xs">
          {data.nextDay !== 0 ? `${data.nextDay}/0${data.nextMonth} ➡️` : ""}
        </p>
      </div>
      <TableContainer
        sx={{
          maxHeight: 320,
          width: "100%",
          backgroundColor: "#F6DCAF",
          fontFamily: "Varela Round",
        }}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <TableCell
                  key={index}
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
            {data.values.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column, index) => {
                    const value = row[column.id];
                    return (
                      <TableCell
                        key={index}
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
    </Paper>
  );
}
