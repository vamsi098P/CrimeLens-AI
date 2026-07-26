import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function CrimePieChart() {
  const data = {
    labels: ["Robbery", "Theft", "Fraud", "Assault"],
    datasets: [
      {
        data: [35, 25, 20, 20],
        backgroundColor: [
          "#3B82F6",
          "#10B981",
          "#F59E0B",
          "#EF4444",
        ],
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
      <h3>🥧 Crime Distribution</h3>
      <Pie data={data} />
    </div>
  );
}

export default CrimePieChart;