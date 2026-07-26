function StatCard({ title, value, color }) {
  return (
    <div
      style={{
        background: "#1E293B",
        padding: "20px",
        borderRadius: "12px",
        borderLeft: `6px solid ${color}`,
      }}
    >
      <h3>{title}</h3>

      <h1>{value}</h1>
    </div>
  );
}

export default StatCard;