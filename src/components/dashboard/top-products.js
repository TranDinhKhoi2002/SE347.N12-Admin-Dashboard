import { formatDistanceToNow, subHours } from "date-fns";
import { v4 as uuid } from "uuid";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { faker } from "@faker-js/faker";
import { useRouter } from "next/router";

const products = [
  {
    id: uuid(),
    name: "Cam sành",
    imageUrl: "/static/images/products/1.jpg",
    sold: `Đã bán ${faker.datatype.number({ min: 1000, max: 10000 })} sản phẩm`,
  },
  {
    id: uuid(),
    name: "Mãng cầu",
    imageUrl: "/static/images/products/2.jpg",
    sold: `Đã bán ${faker.datatype.number({ min: 1000, max: 10000 })} sản phẩm`,
  },
  {
    id: uuid(),
    name: "Chanh",
    imageUrl: "/static/images/products/3.jpg",
    sold: `Đã bán ${faker.datatype.number({ min: 1000, max: 10000 })} sản phẩm`,
  },
  {
    id: uuid(),
    name: "Cà chua bi",
    imageUrl: "/static/images/products/4.jpg",
    sold: `Đã bán ${faker.datatype.number({ min: 1000, max: 10000 })} sản phẩm`,
  },
  {
    id: uuid(),
    name: "Chanh dây Granadilla",
    imageUrl: "/static/images/products/5.jpg",
    sold: `Đã bán ${faker.datatype.number({ min: 1000, max: 10000 })} sản phẩm`,
  },
];

export const TopProducts = (props) => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/products");
  };

  return (
    <Card {...props}>
      <CardHeader subtitle={`${products.length} in total`} title="Top sản phẩm bán chạy" />
      <Divider />
      <List>
        {products.map((product, i) => (
          <ListItem divider={i < products.length - 1} key={product.id}>
            <ListItemAvatar>
              <img
                alt={product.name}
                src={product.imageUrl}
                style={{
                  height: 48,
                  width: 48,
                }}
              />
            </ListItemAvatar>
            <ListItemText primary={product.name} secondary={product.sold} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          p: 2,
        }}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
          onClick={handleNavigate}
        >
          Xem tất cả
        </Button>
      </Box>
    </Card>
  );
};
