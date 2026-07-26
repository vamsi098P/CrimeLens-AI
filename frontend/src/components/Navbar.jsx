import { useEffect, useState } from "react";
import { Bell, ShieldCheck, UserCircle } from "lucide-react";

function Navbar() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const options = {
        weekday: "short",
        day: "numeric",
        month: "short",
        year: "numeric",
      };

      const date = now.toLocaleDateString("en-IN", options);
      const time = now.toLocaleTimeString("en-IN");

      setCurrentTime(`${date} | ${time}`);
    };

    updateTime();

    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        background: "#1E293B",
        border: "1px solid #334155",
        borderRadius: "16px",
        padding: "18px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 4px 15px rgba(0,0,0,0.25)",
      }}
    >
      {/* Left */}
      <div>
        <h2
          style={{
            margin: 0,
            color: "white",
            fontSize: "28px",
            fontWeight: "bold",
          }}
        >
          🛡 CrimeLens AI
        </h2>

        <p
          style={{
            marginTop: "6px",
            color: "#94A3B8",
            fontSize: "15px",
          }}
        >
          AI-Powered Crime Analytics & Investigation Platform
        </p>
      </div>

      {/* Right */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "25px",
        }}
      >
        {/* AI Status */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "#22C55E",
            fontWeight: "bold",
          }}
        >
          <ShieldCheck size={20} />
          AI Engine Online
        </div>

        {/* Date & Time */}
        <div
          style={{
            color: "#CBD5E1",
            fontSize: "14px",
            textAlign: "center",
            minWidth: "220px",
          }}
        >
          {currentTime}
        </div>

        {/* Notification */}
        <Bell
          size={22}
          color="#FACC15"
          style={{ cursor: "pointer" }}
        />

        {/* Officer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "white",
            fontWeight: "bold",
          }}
        >
          <UserCircle size={30} color="#60A5FA" />
          Officer Admin
        </div>
      </div>
    </div>
  );
}

export default Navbar;