import { Box, Button, Container, Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import DataGridView from "~/components/ui/DataGrid";
import { printNumberWithCommas } from "~/utils/printNumerWithCommas";
import transactions from "~/__mocks__/transactions";
import { DashboardLayout } from "../components/dashboard-layout";

const columns = ({ handleSelectTransaction }) => [
  {
    field: "id",
    headerName: "ID",
    width: 100,
    renderCell: (params) => {
      const { row } = params;
      return `${row.id.toString().substring(0, 6)}`;
    },
  },
  {
    field: "paid",
    headerName: "Số tiền ",
    width: 150,
    renderCell: (params) => {
      const { row } = params;
      return `${printNumberWithCommas(row.paid)} VNĐ`;
    },
  },
  {
    field: "method",
    headerName: "Phương thức",
    width: 190,
    renderCell: (params) => {
      const { row } = params;
      return (
        <Stack direction="row" alignItems="center" columnGap={1}>
          <Box
            sx={{
              width: "40px",
              height: "30px",
              position: "relative",
            }}
          >
            <Image
              src={`/static/images/${row.method === "VISA" ? "visa.webp" : "mastercard.png"}`}
              layout="fill"
              objectFit="contain"
            />
          </Box>
          <Typography>{row.method}</Typography>
        </Stack>
      );
    },
  },
  {
    field: "created",
    headerName: "Thời gian",
    headerAlign: "left",
    type: "number",
    width: 190,
    renderCell: (params) => {
      const {
        row: { created },
      } = params;
      return <Typography align="left">{`${created.toLocaleString("en-GB")}`}</Typography>;
    },
  },
  {
    field: "Hành động",
    headerAlign: "center",
    align: "center",
    sortable: false,
    hideable: false,
    filterable: false,
    renderCell: (params) => {
      const { row } = params;
      return (
        <Button variant="outlined" onClick={() => handleSelectTransaction(row)}>
          Xem
        </Button>
      );
    },
  },
];

const Page = () => {
  const [transaction, setTransaction] = useState(null);

  const selectTransaction = (transaction) => {
    setTransaction(transaction);
  };

  return (
    <>
      <Head>
        <title>Giao dịch | Admin Dashboard</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <Typography sx={{ m: 1 }} variant="h4">
            Giao dịch
          </Typography>
          <Grid container spacing={2} sx={{ mt: 4 }}>
            <Grid item xs={12} lg={8}>
              <Paper sx={{ bgcolor: "#fff" }}>
                <DataGridView
                  rows={transactions}
                  columns={columns({ handleSelectTransaction: selectTransaction })}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Paper sx={{ width: "100%", height: "100%", p: 4, bgcolor: "#fff" }}>
                {transaction ? (
                  <Stack>
                    <Typography sx={{ fontWeight: "bold" }}>Chi tiết giao dịch</Typography>
                    <Divider sx={{ my: 2 }} />
                    <Typography sx={{ fontWeight: "bold", mt: 2 }}>Nhà cung cấp</Typography>
                    <Typography>{transaction.supplier}</Typography>
                    <Typography sx={{ fontWeight: "bold", mt: 2 }}>Thời gian</Typography>
                    <Typography>{transaction.created.toLocaleString("en-GB", "dd/MM")}</Typography>
                    <Typography sx={{ fontWeight: "bold", mt: 2 }}>Địa chỉ thanh toán</Typography>
                    <Typography>{transaction.address}</Typography>
                    <Typography sx={{ fontWeight: "bold", mt: 2 }}>Email</Typography>
                    <Typography>{transaction.email}</Typography>
                    <Typography sx={{ fontWeight: "bold", mt: 2 }}>Danh sách sản phẩm</Typography>
                    <Stack>
                      {transaction.products.map((product) => (
                        <Typography key={product.id}>{product.name}</Typography>
                      ))}
                    </Stack>
                    <Divider sx={{ my: 2 }} />
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Typography sx={{ fontWeight: "bold" }}>Tổng tiền</Typography>
                      <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
                        {`${printNumberWithCommas(transaction.paid)} VNĐ`}
                      </Typography>
                    </Stack>
                  </Stack>
                ) : (
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      p: 4,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography>Chọn giao dịch để xem chi tiết</Typography>
                  </Box>
                )}
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
