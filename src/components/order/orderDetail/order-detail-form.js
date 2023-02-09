import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Stack,
  Typography,
  Avatar,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Image from "next/image";
import { useFormik } from "formik";
import { printNumberWithCommas } from "~/utils/printNumerWithCommas";
import { dateFormat } from "~/utils/date-format";
import Iconify from "~/components/UI/Iconify";
import { useRouter } from "next/router";
import { OrderDetailListProducts } from "~/components/order/orderDetail/order-detail-list-products";
import productsInOrder from "~/__mocks__/productsInOrder";
import * as Yup from "yup";

export const OrderDetailForm = () => {
  const order = productsInOrder;
  const shippingPrice = 30000;
  let totalPrice = order.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
  const router = useRouter();
  const day = new Date();
  console.log(dateFormat(day));
  const handleNavigate = () => {
    router.push("/orders");
  };
  const formik = useFormik({
    initialValues: {
      status: 1,
    },
    validationSchema: Yup.object({}),
    onSubmit: (values) => {},
  });

  return (
    <form autoComplete="off" noValidate onSubmit={formik.handleSubmit}>
      <Card>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
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
            <Box sx={{ ml: 1 }}>
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
              <FormControl sx={{ minWidth: 180, mr: 1 }} size="small">
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
              justifyContent: "space-between",
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
                    p: 2.5,
                    mr: 1,
                  }}
                >
                  <PersonIcon />
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
                    p: 2.5,
                    mr: 1,
                  }}
                >
                  <LocalShippingIcon />
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
                    p: 2.5,
                    mr: 1,
                  }}
                >
                  <LocationOnIcon />
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
            <Grid item xs={12}>
              <Box sx={{ mb: 15 }}>
                <OrderDetailListProducts order={order} />
              </Box>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent="space-between"
                sx={{ flexWrap: "wrap" }}
              >
                <Card sx={{ minWidth: 300, bgcolor: "#f6f6f6", mb: 2 }}>
                  <CardContent>
                    <Typography sx={{ fontSize: 16, fontWeight: "bold" }} color="text.primary">
                      Thông tin thanh toán
                    </Typography>
                    <Box sx={{ display: "flex" }}>
                      <Image
                        src={"/static/images/mastercard.png"}
                        width={20}
                        height={20}
                        objectFit="contain"
                      />
                      <Typography
                        gutterBottom
                        sx={{
                          display: "inline-block",
                          whiteSpace: "pre-line",
                          fontSize: 14,
                          ml: 1,
                        }}
                      >
                        Master Card **** **** 4768
                      </Typography>
                    </Box>
                    <Typography color="text.secondary" sx={{ fontSize: 14 }}>
                      Bussiness name:
                      <span style={{ color: "#000" }}>{" Master Card, inc"}</span>
                    </Typography>
                    <Typography color="text.secondary" sx={{ fontSize: 14 }}>
                      Phone:
                      <span style={{ color: "#000" }}>{" +1 (800) 555-154-52"}</span>
                    </Typography>
                  </CardContent>
                </Card>
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
                      minWidth: 300,
                    }}
                  >
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                      <Typography color="textPrimary">Tiền hàng: </Typography>
                      <Typography color="textPrimary" sx={{ fontWeight: "bold" }}>
                        {`${printNumberWithCommas(totalPrice)} VNĐ`}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                      <Typography color="textPrimary">Tiền ship: </Typography>
                      <Typography color="textPrimary" sx={{ fontWeight: "bold" }}>
                        {`${printNumberWithCommas(shippingPrice)} VNĐ`}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                      <Typography color="textPrimary">Tổng tiền:</Typography>
                      <Typography color="textPrimary" sx={{ fontWeight: "bold" }} variant="h6">
                        {`${printNumberWithCommas(totalPrice + shippingPrice)} VNĐ`}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
      </Card>
    </form>
  );
};
