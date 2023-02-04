import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
  IconButton,
} from "@mui/material";
import { Chip } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import { useState, useRef } from "react";
import DataGridView from "~/components/ui/DataGrid";
import { printNumberWithCommas } from "~/utils/printNumerWithCommas";
import Iconify from "~/components/UI/Iconify";
import { AddProductForm } from "~/components/product/add-product-form";

import { DashboardLayout } from "../../components/dashboard-layout";
const Page = () => {
  // const inputFileRef = useRef();
  // const [filename, setFilename] = useState("");
  // const [uploadedFile, setUploadedFile] = useState();
  // const handleFileUpload = (e) => {
  //   if (!e.target.files || e.target.files.length === 0) {
  //     return;
  //   }

  //   const uploadedFilename = e.target.files[0].name;
  //   setFilename(uploadedFilename);
  //   const reader = new FileReader();
  //   reader.onload = function () {
  //     setUploadedFile(reader.result);
  //   };
  //   reader.readAsDataURL(e.target.files[0]);
  // };
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
          <Box sx={{ mt: -8 }}>
            <AddProductForm />
            {/* <div>
              <IconButton>
                <Iconify icon="heroicons:photo" width={30} height={30} />
              </IconButton>
            </div> */}
            {/* <Stack
              direction={{ xs: "column", md: "row" }}
              sx={{ mt: 2 }}
              alignItems={{ xs: "unset", md: "center" }}
              columnGap={2}
            >
              <Typography variant="body1">Hình ảnh</Typography>
              {uploadedFile && (
                <Stack direction="row" justifyContent="start" sx={{ mt: 1 }}>
                  <div>
                    <img
                      src={uploadedFile}
                      alt="Hình sản phẩm"
                      style={{ width: 100, height: 100 }}
                      crossOrigin="anonymous"
                    />
                    <Button
                      sx={{
                        position: "absolute",
                        display: "inline",
                        justifyContent: "center",
                      }}
                    >
                      X
                    </Button>
                  </div>
                </Stack>
              )}
              <Button variant="outlined" component="label" sx={{ py: 2, mt: { xs: 1, md: 0 } }}>
                <Iconify icon="heroicons:photo" width={30} height={30} />
                <input
                  type="file"
                  accept="image/*"
                  ref={inputFileRef}
                  hidden
                  onChange={handleFileUpload}
                />
                {filename && (
                  <Typography
                    sx={{
                      ml: 2,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {filename}
                  </Typography>
                )}
              </Button>
            </Stack> */}
          </Box>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
