import { Chip, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { printNumberWithCommas } from "~/utils/printNumerWithCommas";
import orders from "~/__mocks__/orders";
import ActionsMenu from "../ActionsMenu";
import DataGridView from "../ui/DataGrid";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 90,
    renderCell: (params) => {
      const { row } = params;
      return <Typography>{row.id.substring(0, 6)}</Typography>;
    },
  },
  {
    field: "name",
    headerName: "Họ tên",
    width: 200,
    renderCell: (params) => {
      const { row } = params;
      return <Typography sx={{ fontWeight: "bold" }}>{row.name}</Typography>;
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 240,
  },
  {
    field: "total",
    headerName: "Tổng tiền",
    width: 140,
    renderCell: (params) => {
      const { row } = params;
      return `${printNumberWithCommas(row.total)} VNĐ`;
    },
  },
  {
    field: "status",
    headerName: "Trạng thái",
    width: 140,
    renderCell: (params) => {
      const { row } = params;
      switch (row.status) {
        case "Đã hủy":
          return (
            <Chip
              label="Đã hủy"
              sx={{
                bgcolor: "#FAD4D1",
                color: "#F03A2B",
                fontSize: "13px",
                width: "100px",
                fontWeight: "bold",
              }}
            />
          );
        case "Đang chờ":
          return (
            <Chip
              label="Đang chờ"
              sx={{
                bgcolor: "#FAEECC",
                color: "#FDCA3A",
                fontSize: "13px",
                width: "100px",
                fontWeight: "bold",
              }}
            />
          );
        case "Đang gửi":
          return (
            <Chip
              label="Đang gửi"
              sx={{
                bgcolor: "#A8DAF8",
                color: "#0B79D0",
                fontSize: "13px",
                width: "100px",
                fontWeight: "bold",
              }}
            />
          );
        case "Đã nhận":
          return (
            <Chip
              label="Đã nhận"
              sx={{
                bgcolor: "#D7FFD7",
                color: "#08E608",
                fontSize: "13px",
                width: "100px",
                fontWeight: "bold",
              }}
            />
          );
      }
    },
  },
  {
    field: "date",
    headerName: "Ngày",
    width: 120,
  },
  {
    field: "action",
    headerName: "Tùy chọn",
    headerAlign: 'center',
    align: 'center',
    width: 120,
    
    renderCell: (params) => {
      return <ActionsMenu />;
    },
  },
];

export const OrderListResults = ({}) => {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGridView rows={orders} columns={columns} />
    </Box>
  );
};
