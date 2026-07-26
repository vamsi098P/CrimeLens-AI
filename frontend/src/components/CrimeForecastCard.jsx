import {
  TrendingUp,
  TrendingDown,
  Brain,
  ShieldAlert,
} from "lucide-react";

export default function CrimeForecastCard() {
  const predictions = [
    {
      crime: "Robbery",
      change: "+12%",
      up: true,
    },
    {
      crime: "Cyber Fraud",
      change: "+7%",
      up: true,
    },
    {
      crime: "Vehicle Theft",
      change: "-3%",
      up: false,
    },
    {
      crime: "Drug Activity",
      change: "+5%",
      up: true,
    },
  ];

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <Brain className="text-cyan-400" size={30} />

        <div>
          <h2 className="text-2xl font-bold text-white">
            AI Crime Forecast
          </h2>

          <p className="text-gray-400 text-sm">
            Predicted crime trends for the next 24 hours
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {predictions.map((item) => (
          <div
            key={item.crime}
            className="flex justify-between items-center bg-gray-800 rounded-xl p-4"
          >
            <span className="text-white font-medium">
              {item.crime}
            </span>

            <div
              className={`flex items-center gap-2 font-bold ${
                item.up ? "text-red-400" : "text-green-400"
              }`}
            >
              {item.up ? (
                <TrendingUp size={18} />
              ) : (
                <TrendingDown size={18} />
              )}

              {item.change}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-red-500/10 border border-red-500 rounded-xl p-4">
        <div className="flex items-center gap-3">
          <ShieldAlert className="text-red-400" />

          <div>
            <p className="text-red-400 font-bold">
              Overall Risk: HIGH
            </p>

            <p className="text-gray-300 text-sm">
              AI Confidence: 91%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}