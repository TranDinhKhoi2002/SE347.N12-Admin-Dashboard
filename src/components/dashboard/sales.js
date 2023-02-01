import { Bar } from "react-chartjs-2";
import { Box, Button, Card, CardContent, CardHeader, Divider, useTheme } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import CustomSelect from "../ui/CustomSelect";
import { faker } from "@faker-js/faker";
import { useState } from "react";

const getPastDays = (length) => {
  const pastDays = [...Array(length).keys()].map((index) => {
    const date = new Date();
    date.setDate(date.getDate() - (index + 1));

    return `${date.getDate()}/${date.getMonth() + 1}`;
  });

  return pastDays;
};

const DUMMY_DATA = {
  datasets: [
    {
      backgroundColor: "#3F51B5",
      barPercentage: 0.5,
      barThickness: 12,
      borderRadius: 4,
      categoryPercentage: 0.5,
      data: [...Array(30)].map(() => faker.datatype.number({ min: 0, max: 30 })),
      label: new Date().getFullYear(),
      maxBarThickness: 10,
    },
    {
      backgroundColor: "#EEEEEE",
      barPercentage: 0.5,
      barThickness: 12,
      borderRadius: 4,
      categoryPercentage: 0.5,
      data: [...Array(30)].map(() => faker.datatype.number({ min: 0, max: 30 })),
      label: new Date().getFullYear() - 1,
      maxBarThickness: 10,
    },
  ],
  labels: getPastDays(30),
};

export const Sales = (props) => {
  const [data, setData] = useState(DUMMY_DATA);
  const theme = useTheme();

  const options = {
    animation: true,
    cornerRadius: 20,
    layout: { padding: 0 },
    legend: { display: false },
    maintainAspectRatio: false,
    responsive: true,
    xAxes: [
      {
        ticks: {
          fontColor: theme.palette.text.secondary,
        },
        gridLines: {
          display: false,
          drawBorder: false,
        },
      },
    ],
    yAxes: [
      {
        ticks: {
          fontColor: theme.palette.text.secondary,
          beginAtZero: true,
          min: 0,
        },
        gridLines: {
          borderDash: [2],
          borderDashOffset: [2],
          color: theme.palette.divider,
          drawBorder: false,
          zeroLineBorderDash: [2],
          zeroLineBorderDashOffset: [2],
          zeroLineColor: theme.palette.divider,
        },
      },
    ],
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

  const handleSelect = (mode) => {
    const updatedData = { ...data };
    let numberOfDays = 7;

    for (const item of updatedData.datasets) {
      if (mode === "1 tháng qua") {
        numberOfDays = 30;
      }
      item.data = [...Array(numberOfDays)].map(() => faker.datatype.number({ min: 0, max: 30 }));
    }

    updatedData.labels = getPastDays(numberOfDays).reverse();
    setData({ ...updatedData });
  };

  return (
    <Card {...props}>
      <CardHeader
        action={<CustomSelect options={["1 tháng qua", "7 ngày qua"]} onSelect={handleSelect} />}
        title="Số sản phẩm đã bán"
      />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 400,
            position: "relative",
          }}
        >
          <Bar data={data} options={options} />
        </Box>
      </CardContent>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          p: 2,
        }}
      >
        <Button color="primary" endIcon={<ArrowRightIcon fontSize="small" />} size="small">
          Overview
        </Button>
      </Box>
    </Card>
  );
};
