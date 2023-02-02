import { Doughnut } from "react-chartjs-2";
import { Box, Card, CardContent, CardHeader, Divider, Typography, useTheme } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const buyMethods = [
  {
    title: "Mua trực tiếp",
    value: 34,
    icon: BusinessIcon,
    color: "#3F51B5",
  },
  {
    title: "Tablet",
    value: 66,
    icon: ShoppingCartIcon,
    color: "#E53935",
  },
];

export const BuyMethods = (props) => {
  const theme = useTheme();

  const data = {
    datasets: [
      {
        data: [34, 66],
        backgroundColor: ["#3F51B5", "#e53935", "#FB8C00"],
        borderWidth: 8,
        borderColor: "#FFFFFF",
        hoverBorderColor: "#FFFFFF",
      },
    ],
    labels: ["Mua trực tiếp", "Mua online"],
  };

  const options = {
    animation: true,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false,
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: "index",
      titleFontColor: theme.palette.text.primary,
    },
  };

  return (
    <Card {...props}>
      <CardHeader title="Hình thức mua hàng" />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 300,
            position: "relative",
          }}
        >
          <Doughnut data={data} options={options} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: 2,
          }}
        >
          {buyMethods.map(({ color, icon: Icon, title, value }) => (
            <Box
              key={title}
              sx={{
                p: 1,
                textAlign: "center",
              }}
            >
              <Icon color="action" />
              <Typography color="textPrimary" variant="body1">
                {title}
              </Typography>
              <Typography style={{ color }} variant="h4">
                {value}%
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};
