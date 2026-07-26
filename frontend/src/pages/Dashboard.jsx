import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import ChatPanel from "../components/ChatPanel";
import CrimeTrendChart from "../components/CrimeTrendChart";
import CrimePieChart from "../components/CrimePieChart";
import CrimeForecastCard from "../components/CrimeForecastCard";
import HotspotCard from "../components/HotspotCard";
import NetworkCard from "../components/NetworkCard";
import RecentCasesTable from "../components/RecentCasesTable";
import AlertCenter from "../components/AlertCenter";
import GenerateReportButton from "../components/GenerateReportButton";
import HeroBanner from "../components/HeroBanner";

import { getStats } from "../services/api";

function Dashboard() {
  const [stats, setStats] = useState({
    total_cases: 0,
    active_cases: 0,
    high_risk: 0,
    officers: 0,
  });

  useEffect(() => {
    async function loadStats() {
      try {
        const data = await getStats();
        setStats(data);
      } catch (error) {
        console.error("Failed to fetch stats:", error);
      }
    }

    loadStats();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        background: "#0F172A",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          padding: "25px",
          overflowY: "auto",
        }}
      >
        {/* Navbar */}
        <Navbar />

        {/* Generate Report */}
        <div
          style={{
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <GenerateReportButton stats={stats} />
        </div>
        {/* Hero Banner */}
        <div
        style={{
          marginTop: "20px",
          marginBottom: "25px",
          }}
>
  <HeroBanner />
</div>

        {/* Statistics */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
          }}
        >
          <StatCard
            title="Total Cases"
            value={stats.total_cases}
            color="#3B82F6"
          />

          <StatCard
            title="Active Cases"
            value={stats.active_cases}
            color="#10B981"
          />

          <StatCard
            title="High Risk"
            value={stats.high_risk}
            color="#EF4444"
          />

          <StatCard
            title="Officers"
            value={stats.officers}
            color="#F59E0B"
          />
        </div>

        {/* AI Chat */}
        <div
          style={{
            marginTop: "30px",
          }}
        >
          <ChatPanel />
        </div>

        {/* Charts */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <CrimeTrendChart />
          <CrimePieChart />
        </div>

        {/* AI Crime Forecast */}
        <div
          style={{
            marginTop: "30px",
          }}
        >
          <CrimeForecastCard />
        </div>

        {/* Crime Hotspots + Criminal Network */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <HotspotCard />
          <NetworkCard />
        </div>

        {/* AI Threat Alert Center */}
        <div
          style={{
            marginTop: "30px",
          }}
        >
          <AlertCenter />
        </div>

        {/* Recent Cases */}
        <div
          style={{
            marginTop: "30px",
            marginBottom: "40px",
          }}
        >
          <RecentCasesTable />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;