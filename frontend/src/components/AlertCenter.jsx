import { useEffect, useState } from "react";
import {
  AlertTriangle,
  ShieldAlert,
  ShieldCheck,
  Brain,
  MapPin,
  Clock3,
} from "lucide-react";

const alerts = [
  {
    id: 1,
    level: "High",
    title: "Robbery spike detected",
    location: "Koramangala",
    confidence: 96,
    action: "Increase night patrol units",
    time: "2 min ago",
  },
  {
    id: 2,
    level: "Medium",
    title: "Cyber fraud increasing",
    location: "Whitefield",
    confidence: 87,
    action: "Launch public awareness campaign",
    time: "6 min ago",
  },
  {
    id: 3,
    level: "Low",
    title: "Vehicle theft decreasing",
    location: "Indiranagar",
    confidence: 74,
    action: "Continue monitoring",
    time: "12 min ago",
  },
  {
    id: 4,
    level: "High",
    title: "Suspicious gang movement",
    location: "Electronic City",
    confidence: 93,
    action: "Deploy rapid response team",
    time: "18 min ago",
  },
];

export default function AlertCenter() {
  const [lastUpdated, setLastUpdated] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setLastUpdated(new Date());
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  const levelColor = (level) => {
    switch (level) {
      case "High":
        return "bg-red-500/20 text-red-400 border-red-500";
      case "Medium":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500";
      default:
        return "bg-green-500/20 text-green-400 border-green-500";
    }
  };

  return (
    <div className="bg-gray-900 rounded-2xl border border-gray-800 shadow-lg p-6">

      <div className="flex justify-between items-center mb-6">

        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <AlertTriangle className="text-red-500" />
            AI Threat Alert Center
          </h2>

          <p className="text-gray-400 text-sm mt-1">
            Live AI generated crime intelligence alerts
          </p>
        </div>

        <div className="flex items-center gap-2">

          <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>

          <span className="text-green-400 font-semibold">
            LIVE
          </span>

        </div>

      </div>

      <div className="space-y-5">

        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="bg-gray-800 rounded-xl border border-gray-700 p-5 hover:border-cyan-500 transition duration-300"
          >
            <div className="flex justify-between items-start flex-wrap gap-4">

              <div>

                <div className="flex items-center gap-3 mb-2">

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold border ${levelColor(
                      alert.level
                    )}`}
                  >
                    {alert.level}
                  </span>

                  <h3 className="text-white text-lg font-semibold">
                    {alert.title}
                  </h3>

                </div>

                <div className="flex items-center gap-2 text-gray-400 mb-2">
                  <MapPin size={16} />
                  {alert.location}
                </div>

                <div className="text-gray-300">
                  <strong>Recommended Action:</strong>{" "}
                  {alert.action}
                </div>

              </div>

              <div className="text-right">

                <div className="flex items-center justify-end gap-2 mb-3">

                  {alert.confidence >= 90 ? (
                    <ShieldAlert
                      className="text-red-400"
                      size={22}
                    />
                  ) : (
                    <ShieldCheck
                      className="text-green-400"
                      size={22}
                    />
                  )}

                  <span className="text-white font-bold text-lg">
                    {alert.confidence}%
                  </span>

                </div>

                <div className="text-gray-400 text-sm flex items-center justify-end gap-2">
                  <Clock3 size={15} />
                  {alert.time}
                </div>

              </div>

            </div>
          </div>
        ))}

      </div>

      <div className="mt-6 border-t border-gray-700 pt-4 flex justify-between items-center text-sm">

        <div className="flex items-center gap-2 text-cyan-400">
          <Brain size={18} />
          Gemini AI Crime Intelligence Engine
        </div>

        <div className="text-gray-400">
          Updated: {lastUpdated.toLocaleTimeString()}
        </div>

      </div>
    </div>
  );
}