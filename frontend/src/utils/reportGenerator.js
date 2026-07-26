import { jsPDF } from "jspdf";

export const generateCrimeReport = (stats = {}) => {
  const doc = new jsPDF();

  const pageWidth = doc.internal.pageSize.getWidth();

  // ===== HEADER =====
  doc.setFillColor(15, 23, 42);
  doc.rect(0, 0, pageWidth, 30, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(255, 255, 255);
  doc.text("CrimeLens AI", pageWidth / 2, 15, { align: "center" });

  doc.setFontSize(12);
  doc.text("AI Crime Analytics Investigation Report", pageWidth / 2, 23, {
    align: "center",
  });

  // ===== DATE =====
  doc.setTextColor(40);
  doc.setFontSize(11);

  const now = new Date();

  doc.text(
    `Generated: ${now.toLocaleDateString()} ${now.toLocaleTimeString()}`,
    15,
    42
  );

  // ===== TITLE =====
  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");
  doc.text("Executive Summary", 15, 55);

  // ===== STATS =====
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");

  let y = 70;

  const rows = [
    ["Total Cases", stats.total_cases ?? 12456],
    ["Active Cases", stats.active_cases ?? 2140],
    ["High Risk Cases", stats.high_risk ?? 341],
    ["Officers", stats.officers ?? 523],
  ];

  rows.forEach(([label, value]) => {
    doc.setFont("helvetica", "bold");
    doc.text(label + " :", 20, y);

    doc.setFont("helvetica", "normal");
    doc.text(String(value), 90, y);

    y += 10;
  });

  y += 10;

  // ===== TREND =====
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("Crime Trend Analysis", 15, y);

  y += 10;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);

  doc.text("• Robbery incidents increased by 18%.", 20, y);
  y += 8;

  doc.text("• Cyber fraud increased by 12%.", 20, y);
  y += 8;

  doc.text("• Vehicle theft reduced by 5%.", 20, y);
  y += 8;

  doc.text("• Drug-related activities remain stable.", 20, y);

  y += 18;

  // ===== HOTSPOTS =====
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("High Risk Locations", 15, y);

  y += 10;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);

  doc.text("• Koramangala", 20, y);
  y += 8;

  doc.text("• Whitefield", 20, y);
  y += 8;

  doc.text("• Electronic City", 20, y);
  y += 8;

  doc.text("• HSR Layout", 20, y);

  y += 18;

  // ===== AI =====
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("AI Assessment", 15, y);

  y += 10;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);

  doc.text(
    "The AI engine identifies robbery and cyber fraud as",
    20,
    y
  );

  y += 7;

  doc.text(
    "the fastest growing crime categories requiring",
    20,
    y
  );

  y += 7;

  doc.text(
    "immediate intervention and additional surveillance.",
    20,
    y
  );

  y += 18;

  // ===== RECOMMENDATIONS =====
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("Recommended Actions", 15, y);

  y += 10;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);

  doc.text("✔ Increase night patrol coverage.", 20, y);
  y += 8;

  doc.text("✔ Deploy additional CCTV monitoring.", 20, y);
  y += 8;

  doc.text("✔ Strengthen cyber awareness campaigns.", 20, y);
  y += 8;

  doc.text("✔ Monitor repeat offenders closely.", 20, y);
  y += 8;

  doc.text("✔ Increase surveillance in hotspot areas.", 20, y);

  // ===== FOOTER =====
  doc.setFontSize(10);
  doc.setTextColor(120);

  doc.text(
    "Generated automatically by CrimeLens AI",
    pageWidth / 2,
    285,
    { align: "center" }
  );

  doc.save("CrimeLens_AI_Report.pdf");
};