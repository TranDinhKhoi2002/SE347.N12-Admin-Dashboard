import { useState, useRef } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  InputAdornment,
  Stack,
  Typography,
  IconButton,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useFormik } from "formik";
import { printNumberWithCommas } from "~/utils/printNumerWithCommas";
import Iconify from "~/components/UI/Iconify";
import { useRouter } from "next/router";
import * as Yup from "yup";

export const AddProductForm = () => {
  const router = useRouter();
  const inputFileRef = useRef();
  const [filename, setFilename] = useState("");
  const [uploadedFile, setUploadedFile] = useState();
  const handleFileUpload = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }

    const uploadedFilename = e.target.files[0].name;
    setFilename(uploadedFilename);
    const reader = new FileReader();
    reader.onload = function () {
      setUploadedFile(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const handleRemoveImage = () => {
    setFilename("");
    setUploadedFile("");
  };

  const handleNavigate = () => {
    router.push("/products");
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      discription: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Vui lòng nhập tên sản phẩm"),
      price: Yup.string().required("Vui lòng nhập giá sản phẩm"),
      discription: Yup.string().required("Vui lòng nhập mô tả"),
    }),
    onSubmit: (values) => {
      // props.setValues({
      //   name: values.name,
      //   lastName: values.lastName,
      // });
    },
  });

  return (
    <form autoComplete="off" noValidate onSubmit={formik.handleSubmit}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          p: 2,
        }}
      >
        <Button color="secondary" variant="contained" sx={{ mr: 1 }} onClick={handleNavigate}>
          Đóng
        </Button>
        <Button color="primary" variant="contained" type="submit">
          Lưu
        </Button>
      </Box>
      <Card>
        <CardHeader title="Thông tin sản phẩm" />
        <Divider />
        <CardContent maxWidth={false}>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                error={Boolean(formik.touched.name && formik.errors.name)}
                fullWidth
                helperText={formik.touched.name && formik.errors.name}
                label="Tên sản phẩm"
                name="name"
                onChange={formik.handleChange}
                required
                value={formik.values.name}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                error={Boolean(formik.touched.price && formik.errors.price)}
                helperText={formik.touched.price && formik.errors.price}
                label="Giá"
                name="price"
                type="number"
                // InputLabelProps={{
                //   shrink: true,
                // }}
                fullWidth
                onChange={formik.handleChange}
                required
                value={formik.values.price}
                variant="outlined"
                InputProps={{
                  endAdornment: <InputAdornment position="end">VNĐ</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                error={Boolean(formik.touched.discription && formik.errors.discription)}
                fullWidth
                helperText={formik.touched.discription && formik.errors.discription}
                label="Mô tả"
                name="discription"
                onChange={formik.handleChange}
                value={formik.values.discription}
                multiline
                required
                maxRows={3}
                variant="outlined"
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <Stack
                direction={{ xs: "column", md: "row" }}
                sx={{ mt: 2 }}
                alignItems={{ xs: "unset", md: "center" }}
                columnGap={2}
              >
                <Typography variant="body1">Hình ảnh:</Typography>
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
              </Stack>
              {uploadedFile && (
                <Stack direction="row" justifyContent="start" sx={{ mt: 4 }}>
                  <div>
                    <img
                      src={uploadedFile}
                      alt="Hình sản phẩm"
                      crossOrigin="anonymous"
                      style={{ width: "40%", height: "auto" }}
                    ></img>
                    <IconButton
                      aria-label="delete"
                      color="error"
                      sx={{
                        position: "absolute",
                        display: "inline",
                        justifyContent: "center",
                        ml: -2,
                        mt: -2.5,
                      }}
                      onClick={() => handleRemoveImage()}
                    >
                      X
                    </IconButton>
                  </div>
                </Stack>
              )}
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
      </Card>
    </form>
  );
};
