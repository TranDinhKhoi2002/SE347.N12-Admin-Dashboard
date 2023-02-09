import { Box, Container, Typography } from "@mui/material";
import Head from "next/head";
import { AddProductForm } from "~/components/product/add-product-form";

import { DashboardLayout } from "../../components/dashboard-layout";
const Page = () => {
  return (
    <>
      <Head>
        <title>Tạo sản phẩm mới | Admin Dashboard</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              m: -1,
            }}
          >
            <Typography sx={{ m: 1 }} variant="h4">
              Tạo sản phẩm mới
            </Typography>
          </Box>
          <Box sx={{ mt: { xs: 1, sm: -8 } }}>
            <AddProductForm />
          </Box>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
