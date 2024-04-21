import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const MyDoughnutChart = () => {
//   const prices = [];
//   const date = [];

//   console.log(days);

//   for (let i = 0; i < arr.length; i++) {
//     if (days === "24h") {
//       date.push(new Date(arr[i][0]).toLocaleTimeString());
//     } else {
//       // this is not good for 24gr format as it shows the same date everywhere
//       date.push(new Date(arr[i][0]).toLocaleDateString());
//     }
//     prices.push(arr[i][1]);
//   }

  return (
    
    <Doughnut
      options={{
        responsive: true,
      }}
       data ={ {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      }}
    />


  );
};

export default MyDoughnutChart;
