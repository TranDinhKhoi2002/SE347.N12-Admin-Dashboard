import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@mui/material';
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const AccountProfileDetails = (props) => {
  const [values, setValues] = useState({
    birthday: new Date(),
  });

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const formik = useFormik({
    initialValues: {
      email: "demo@devias.io",
      firstName: "Katarina",
      lastName: "Smith",
      phoneNumber: "0369696969",
      address: "USA"
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Email không hợp lệ").max(255).required("Vui lòng nhập email"),
      firstName: Yup.string().required("Vui lòng nhập họ"),
      lastName: Yup.string().required("Vui lòng nhập tên"),
      phoneNumber: Yup.string().matches(phoneRegExp, "Số điện thoại không hợp lệ").required("Vui lòng nhập số điện thoại"),
      address: Yup.string().required("Vui lòng nhập địa chỉ"),
    }),
    onSubmit: (values) => {
      console.log(values);
      props.setValues({
        firstName: values.firstName,
        lastName: values.lastName,
      });
    },
  });

  return (
    <form autoComplete="off" noValidate {...props} onSubmit={formik.handleSubmit}>
      <Card>
        <CardHeader title="Thông tin cá nhân" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                error={Boolean(formik.touched.firstName && formik.errors.firstName)}
                fullWidth
                helperText={formik.touched.firstName && formik.errors.firstName}
                label="Họ"
                name="firstName"
                onChange={formik.handleChange}
                required
                value={formik.values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                error={Boolean(formik.touched.lastName && formik.errors.lastName)}
                fullWidth
                helperText={formik.touched.lastName && formik.errors.lastName}
                label="Tên"
                name="lastName"
                onChange={formik.handleChange}
                required
                value={formik.values.lastName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                error={Boolean(formik.touched.email && formik.errors.email)}
                fullWidth
                helperText={formik.touched.email && formik.errors.email}
                label="Email"
                name="email"
                onChange={formik.handleChange}
                required
                value={formik.values.email}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                error={Boolean(formik.touched.phoneNumber && formik.errors.phoneNumber)}
                fullWidth
                helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                label="Số điện thoại"
                name="phoneNumber"
                onChange={formik.handleChange}
                value={formik.values.phoneNumber}
                variant="outlined"
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                error={Boolean(formik.touched.address && formik.errors.address)}
                fullWidth
                helperText={formik.touched.address && formik.errors.address}
                label="Địa chỉ"
                name="address"
                onChange={formik.handleChange}
                required
                value={formik.values.address}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <DatePicker
                openTo="year"
                views={["year", "month", "day"]}
                label="Ngày sinh"
                name="birthday"
                value={values.birthday}
                onChange={(newValue) => {
                  setValues({...values, birthday: newValue})
                }}
                renderInput={(params) => <TextField {...params} helperText={null} />}
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          <Button color="primary" variant="contained" type="submit">
            Lưu
          </Button>
        </Box>
      </Card>
    </form>
  );
};
