import { Box, Container, Typography } from "@mui/material";
import Head from "next/head";
import { ProductDetailForm } from "~/components/product/product-detail-form";
import productDetail from "~/__mocks__/productDetail";

import { DashboardLayout } from "../../components/dashboard-layout";
const Page = () => {
  console.log(productDetail);
  return (
    <>
      <Head>
        <title>Chi tiết sản phẩm | Admin Dashboard</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <Box>
            <Typography sx={{ m: { sm: 2 }, position: { sm: "absolute" } }} variant="h4">
              Chi tiết sản phẩm
            </Typography>
            <ProductDetailForm product={productDetail} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
