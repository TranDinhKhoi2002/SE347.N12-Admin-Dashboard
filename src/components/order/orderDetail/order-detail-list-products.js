import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { printNumberWithCommas } from "~/utils/printNumerWithCommas";
import DataGridView from "../../ui/DataGrid";
import Image from "next/image";

const columns = [
  {
    field: "name",
    headerName: "Sản phẩm",
    width: 400,
    flex: 2,
    renderCell: (params) => {
      const { row } = params;
      return (
        <Box sx={{ display: "flex" }}>
          <Image alt="Product-image" src={row.image} width={50} height={50} />
          <Typography
            gutterBottom
            sx={{ fontWeight: "bold", display: "inline-block", whiteSpace: "pre-line", ml: 1 }}
          >
            {row.name}
          </Typography>
        </Box>
      );
    },
  },
  {
    field: "quantity",
    headerName: "Số lượng",
    width: 100,
    flex: 1,
  },
  {
    field: "price",
    headerName: "Giá tiền",
    width: 140,
    flex: 1,
    renderCell: (params) => {
      const { row } = params;
      return `${printNumberWithCommas(row.price)} VNĐ`;
    },
  },
  {
    field: "total",
    headerName: "Tổng tiền",
    width: 140,
    flex: 1,
    renderCell: (params) => {
      const { row } = params;
      return `${printNumberWithCommas(row.price * row.quantity)} VNĐ`;
    },
  },
];

export const OrderDetailListProducts = ({ order }) => {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGridView rows={order} columns={columns} />
    </Box>
  );
};
