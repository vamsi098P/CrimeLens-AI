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

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function CrimeTrendChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Crime Cases",
        data: [120, 180, 150, 210, 240, 200],
        borderColor: "#3B82F6",
        backgroundColor: "#3B82F6",
        tension: 0.4,
      },
    ],
  };

  return (
    <div
      style={{
        background: "#1E293B",
        padding: "20px",
        borderRadius: "12px",
      }}
    >
      <h3>📈 Crime Trend</h3>
      <Line data={data} />
    </div>
  );
}

export default CrimeTrendChart;