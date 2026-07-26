import { FileText } from "lucide-react";
import { generateCrimeReport } from "../utils/reportGenerator";

export default function GenerateReportButton({ stats }) {
  const handleGenerate = () => {
    generateCrimeReport(stats);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: "20px",
      }}
    >
      <button
        onClick={handleGenerate}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          background: "linear-gradient(135deg,#2563EB,#06B6D4)",
          color: "#fff",
          border: "none",
          padding: "12px 22px",
          borderRadius: "12px",
          cursor: "pointer",
          fontSize: "15px",
          fontWeight: "bold",
          boxShadow: "0 10px 25px rgba(37,99,235,.35)",
          transition: "0.3s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow =
            "0 14px 30px rgba(37,99,235,.45)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0px)";
          e.currentTarget.style.boxShadow =
            "0 10px 25px rgba(37,99,235,.35)";
        }}
      >
        <FileText size={20} />

        <span>Generate Investigation Report</span>
      </button>
    </div>
  );
}