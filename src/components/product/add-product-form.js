import { useState, useRef } from "react";
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
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  FormHelperText,
} from "@mui/material";
import { useFormik } from "formik";
import Iconify from "~/components/UI/Iconify";
import { useRouter } from "next/router";
import { categories as categoryList } from "~/__mocks__/categories";
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
      category: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Vui lòng nhập tên sản phẩm"),
      price: Yup.string().required("Vui lòng nhập giá sản phẩm"),
      discription: Yup.string().required("Vui lòng nhập mô tả"),
      category: Yup.string().required("Vui lòng chọn danh mục"),
    }),
    onSubmit: (values) => {
      // props.setValues({
      //   name: values.name,
      //   lastName: values.lastName,
      // });
    },
  });

  return (
    <form autoComplete="off" onSubmit={formik.handleSubmit}>
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
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                error={Boolean(formik.touched.name && formik.errors.name)}
                fullWidth
                helperText={formik.touched.name && formik.errors.name}
                label="Tên sản phẩm"
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
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
                onBlur={formik.handleBlur}
                required
                value={formik.values.price}
                variant="outlined"
                InputProps={{
                  endAdornment: <InputAdornment position="end">VNĐ</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <FormControl
                sx={{ width: "100%", mr: 1 }}
                error={Boolean(formik.touched.category && formik.errors.category)}
              >
                <InputLabel id="demo-select-small" required>
                  Danh mục
                </InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  name="category"
                  value={formik.values.category}
                  label="Danh mục"
                  onChange={formik.handleChange}
                >
                  {categoryList.map((category) => (
                    <MenuItem key={category.id} value={category.id}>
                      {category.name}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>{formik.touched.category && formik.errors.category}</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                error={Boolean(formik.touched.discription && formik.errors.discription)}
                fullWidth
                helperText={formik.touched.discription && formik.errors.discription}
                label="Mô tả"
                name="discription"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
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
                      onClick={handleRemoveImage}
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
