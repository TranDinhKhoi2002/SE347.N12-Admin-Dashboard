import { Chip, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { printNumberWithCommas } from "~/utils/printNumerWithCommas";
import orders from "~/__mocks__/orders";
import ActionsMenu from "../ActionsMenu";
import { SeverityPill } from "../severity-pill";
import DataGridView from "../ui/DataGrid";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 90,
    renderCell: (params) => {
      const { row } = params;
      return <Typography>{row.id.substring(0, 6).toUpperCase()}</Typography>;
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
      return (
        <SeverityPill
          color={
            (row.status === "Đã giao" && "success") ||
            (row.status === "Đã hủy" && "error") ||
            "warning"
          }
        >
          {row.status}
        </SeverityPill>
      );
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
    headerAlign: "center",
    align: "center",
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
