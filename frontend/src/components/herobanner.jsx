import {
  Shield,
  Brain,
  TrendingUp,
  MapPinned,
  Sparkles,
} from "lucide-react";

export default function HeroBanner() {
  return (
    <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-8 border border-cyan-500/30 shadow-xl">

      <div className="flex items-center gap-3 mb-4">
        <Shield className="text-cyan-400" size={42} />

        <div>
          <h1 className="text-4xl font-bold text-white">
            CrimeLens AI
          </h1>

          <p className="text-cyan-300 text-lg">
            AI-Powered Crime Analytics & Investigation Platform
          </p>
        </div>
      </div>

      <p className="text-gray-300 text-lg max-w-4xl leading-8">
        Empowering law enforcement agencies with AI-driven crime analytics,
        hotspot detection, criminal network visualization, predictive crime
        forecasting, and intelligent investigation assistance.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-8">

        <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
          <Brain className="text-cyan-400 mb-3" size={30} />
          <h3 className="text-white font-semibold">
            AI Assistant
          </h3>
          <p className="text-gray-400 text-sm">
            Smart investigation support
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
          <MapPinned className="text-red-400 mb-3" size={30} />
          <h3 className="text-white font-semibold">
            Crime Hotspots
          </h3>
          <p className="text-gray-400 text-sm">
            Interactive location analysis
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
          <TrendingUp className="text-green-400 mb-3" size={30} />
          <h3 className="text-white font-semibold">
            Forecast
          </h3>
          <p className="text-gray-400 text-sm">
            Predictive crime trends
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
          <Sparkles className="text-yellow-400 mb-3" size={30} />
          <h3 className="text-white font-semibold">
            AI Reports
          </h3>
          <p className="text-gray-400 text-sm">
            Automated intelligence reports
          </p>
        </div>

      </div>

    </div>
  );
}