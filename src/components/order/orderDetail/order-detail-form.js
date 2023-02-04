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
  Avatar,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useFormik } from "formik";
import { printNumberWithCommas } from "~/utils/printNumerWithCommas";
import { dateFormat } from "~/utils/date-format";
import Iconify from "~/components/UI/Iconify";
import { useRouter } from "next/router";
import { OrderDetailListProducts } from "~/components/order/orderDetail/order-detail-list-products";
import * as Yup from "yup";

export const OrderDetailForm = () => {
  const router = useRouter();
  const day = new Date();
  console.log(dateFormat(day));
  const handleNavigate = () => {
    router.push("/orders");
  };
  const formik = useFormik({
    initialValues: {
      status: 1,
      note: "",
    },
    validationSchema: Yup.object({}),
    onSubmit: (values) => {
      // props.setValues({
      //   name: values.name,
      //   lastName: values.lastName,
      // });
    },
  });

  return (
    <form autoComplete="off" noValidate onSubmit={formik.handleSubmit}>
      <Card>
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", sm: "space-between" },
            flexWrap: "wrap",
            mx: { xs: 0, sm: 2 },
            py: 1,
            gap: 1,
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Box>
              <Iconify width={30} height={30} icon="uil:calender"></Iconify>
            </Box>
            <Box>
              <Typography color="textPrimary" sx={{ fontWeight: "bold" }}>
                {dateFormat(day)}
              </Typography>
              <Typography color="textSecondary">{`
              #${router.query.id}`}</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box>
              <FormControl sx={{ minWidth: 120, mr: 1 }} size="small">
                <InputLabel id="demo-select-small">Trạng thái</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  name="status"
                  value={formik.values.status}
                  label="Trạng thái"
                  onChange={formik.handleChange}
                >
                  <MenuItem value={1}>Đang giao</MenuItem>
                  <MenuItem value={2}>Đã giao</MenuItem>
                  <MenuItem value={3}>Đã hủy</MenuItem>
                </Select>
              </FormControl>
              <Button color="secondary" variant="contained" sx={{ mr: 1 }} onClick={handleNavigate}>
                Đóng
              </Button>
              <Button color="primary" variant="contained" type="submit">
                Lưu
              </Button>
            </Box>
          </Box>
        </Box>

        <Divider />
        <CardContent maxWidth={false}>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", sm: "space-between" },
              flexWrap: "wrap",
              gap: 1,
              mx: { xs: 0, sm: 2 },
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Box>
                <Avatar
                  sx={{
                    backgroundColor: "primary.main",
                    height: 30,
                    width: 30,
                    mr: 1,
                  }}
                >
                  {/* <PeopleIcon /> */}
                </Avatar>
              </Box>
              <Box>
                <Typography color="textPrimary" sx={{ fontWeight: "bold" }}>
                  Khách hàng
                </Typography>
                <Typography color="textSecondary">{`
              Nguyễn Văn A`}</Typography>
                <Typography color="textSecondary">{`
              abc@gmail.com`}</Typography>
                <Typography color="textSecondary">{`
              +0123456789`}</Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Box>
                <Avatar
                  sx={{
                    backgroundColor: "primary.main",
                    height: 30,
                    width: 30,
                    mr: 1,
                  }}
                >
                  {/* <PeopleIcon /> */}
                </Avatar>
              </Box>
              <Box>
                <Typography color="textPrimary" sx={{ fontWeight: "bold" }}>
                  Đơn vị vẫn chuyển
                </Typography>
                <Typography color="textSecondary">{`
              Giao hàng: Giao hàng nhanh`}</Typography>
                <Typography color="textSecondary">{`
              Hình thức thanh toán: Tiền mặt`}</Typography>
                <Typography color="textSecondary">{`
              Trạng thái: Đang giao`}</Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Box>
                <Avatar
                  sx={{
                    backgroundColor: "primary.main",
                    height: 30,
                    width: 30,
                    mr: 1,
                  }}
                >
                  {/* <PeopleIcon /> */}
                </Avatar>
              </Box>
              <Box>
                <Typography color="textPrimary" sx={{ fontWeight: "bold" }}>
                  Địa chỉ
                </Typography>
                <Typography color="textSecondary">{`
              Thành phố: Hồ Chí Minh`}</Typography>
                <Typography color="textSecondary">{`
              Đường: Vành đai`}</Typography>
                <Typography color="textSecondary">{`
              Số nhà: 230A`}</Typography>
              </Box>
            </Box>
          </Box>
          <Grid sx={{ mt: 3 }} container spacing={2}>
            <Grid item md={9} xs={12} sx={{ mb: 10 }}>
              <OrderDetailListProducts />
            </Grid>

            <Grid item md={3} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <Box
                  sx={{
                    mb: 1,
                    textAlign: "end",
                    width: "80%",
                  }}
                >
                  <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography color="textPrimary">Tiền hàng:</Typography>
                    <Typography color="textPrimary" sx={{ fontWeight: "bold" }}>
                      100,000 VNĐ
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography color="textPrimary">Tiền ship: </Typography>
                    <Typography color="textPrimary" sx={{ fontWeight: "bold" }}>
                      10,000 VNĐ
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography color="textPrimary">Tổng tiền:</Typography>
                    <Typography color="textPrimary" sx={{ fontWeight: "bold" }} variant="h6">
                      110,000 VNĐ
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Divider />
              <TextField
                sx={{ mt: 1 }}
                error={Boolean(formik.touched.note && formik.errors.note)}
                fullWidth
                helperText={formik.touched.note && formik.errors.note}
                label="Ghi chú"
                name="note"
                onChange={formik.handleChange}
                value={formik.values.note}
                multiline
                maxRows={3}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
      </Card>
    </form>
  );
};
