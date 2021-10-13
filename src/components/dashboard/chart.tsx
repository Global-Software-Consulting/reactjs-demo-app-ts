import Chart from "react-apexcharts";
import { Box, Card, CardHeader } from "@mui/material";
const options = {
  chart: {
    id: "basic-bar",
  },
 
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
  },
};

const series = [
  {
    name: "series-1",
    data: [30, 40, 45, 50, 49, 60, 70, 91],
  },
];
export default function BarChart() {
  return (
    <Card>
      <CardHeader title="Conversion Rates" subheader="(+43%) than last year" />
      <Box sx={{ mx: 3 }} dir="ltr">
        <Chart options={options} series={series} type="bar" width="500" />
      </Box>
    </Card>
  );
}
