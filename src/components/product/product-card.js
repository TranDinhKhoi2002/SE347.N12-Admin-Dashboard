import { Box, Button, Card, CardContent, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import PropTypes from "prop-types";
import Iconify from "../ui/Iconify";

export const ProductCard = ({ product, ...rest }) => (
  <Card
    sx={{
      display: "flex",
      flexDirection: "column",
      height: "100%",
    }}
    {...rest}
  >
    <CardContent sx={{ p: 0 }}>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          height: "300px",
          width: "100%",
        }}
      >
        <Image alt="Product-image" src={product.image} layout="fill" objectFit="cover" />
      </Box>
      <Box sx={{ px: 2, py: 1 }}>
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h6"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "1",
            WebkitBoxOrient: "vertical",
          }}
        >
          {product.name}
        </Typography>
      </Box>
    </CardContent>
    <Divider />
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Button fullWidth variant="outlined" color="primary">
            <Iconify icon="material-symbols:edit" sx={{ mr: 1, height: "20px", width: "20px" }} />
            Chỉnh sửa
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button fullWidth variant="outlined" color="error">
            <Iconify icon="ic:baseline-delete" sx={{ mr: 1, height: "20px", width: "20px" }} />
            Xóa
          </Button>
        </Grid>
      </Grid>
    </Box>
  </Card>
);

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
