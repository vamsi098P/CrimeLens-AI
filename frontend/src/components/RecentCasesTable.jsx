import { useState } from "react";
import {
  Search,
  ShieldAlert,
  ShieldCheck,
  Clock3,
} from "lucide-react";
import CaseSummaryModal from "./CaseSummaryModal";

const data = [
  {
    id: "CR-1001",
    crime: "Robbery",
    location: "Koramangala",
    officer: "Inspector Ravi",
    date: "Today",
    risk: "High",
    status: "Open",
    ai: 96,
  },
  {
    id: "CR-1002",
    crime: "Cyber Fraud",
    location: "Whitefield",
    officer: "Officer Meena",
    date: "Today",
    risk: "High",
    status: "Investigating",
    ai: 94,
  },
  {
    id: "CR-1003",
    crime: "Vehicle Theft",
    location: "Indiranagar",
    officer: "Inspector Kiran",
    date: "Yesterday",
    risk: "Medium",
    status: "Investigating",
    ai: 84,
  },
  {
    id: "CR-1004",
    crime: "Burglary",
    location: "HSR Layout",
    officer: "Officer Kumar",
    date: "Yesterday",
    risk: "Medium",
    status: "Open",
    ai: 82,
  },
  {
    id: "CR-1005",
    crime: "Assault",
    location: "MG Road",
    officer: "Inspector Arun",
    date: "2 Days Ago",
    risk: "High",
    status: "Open",
    ai: 91,
  },
  {
    id: "CR-1006",
    crime: "Pickpocket",
    location: "Majestic",
    officer: "Officer Ramesh",
    date: "2 Days Ago",
    risk: "Low",
    status: "Closed",
    ai: 69,
  },
  {
    id: "CR-1007",
    crime: "Drug Activity",
    location: "BTM Layout",
    officer: "Inspector Devi",
    date: "Today",
    risk: "High",
    status: "Investigating",
    ai: 93,
  },
  {
    id: "CR-1008",
    crime: "Domestic Violence",
    location: "Yelahanka",
    officer: "Officer Priya",
    date: "3 Days Ago",
    risk: "Medium",
    status: "Closed",
    ai: 80,
  },
  {
    id: "CR-1009",
    crime: "Fraud",
    location: "Electronic City",
    officer: "Inspector Suresh",
    date: "Today",
    risk: "Medium",
    status: "Open",
    ai: 86,
  },
  {
    id: "CR-1010",
    crime: "Chain Snatching",
    location: "Jayanagar",
    officer: "Officer Ashok",
    date: "Yesterday",
    risk: "Low",
    status: "Closed",
    ai: 74,
  },
];

export default function RecentCasesTable() {
  const [search, setSearch] = useState("");
  const [selectedCase, setSelectedCase] = useState(null);

  const filtered = data.filter((item) =>
    (
      item.id +
      item.crime +
      item.location +
      item.officer
    )
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const riskColor = (risk) => {
    if (risk === "High")
      return "bg-red-500/20 text-red-400";
    if (risk === "Medium")
      return "bg-yellow-500/20 text-yellow-300";
    return "bg-green-500/20 text-green-400";
  };

  const statusColor = (status) => {
    if (status === "Open")
      return "bg-red-500/20 text-red-400";

    if (status === "Investigating")
      return "bg-blue-500/20 text-blue-400";

    return "bg-green-500/20 text-green-400";
  };

  return (
    <div className="bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-800">

      <div className="flex justify-between items-center mb-5 flex-wrap gap-4">

        <div>
          <h2 className="text-2xl font-bold text-white">
            📋 Recent Cases Intelligence
          </h2>

          <p className="text-gray-400 text-sm">
            AI prioritized active investigations
          </p>
        </div>

        <div className="relative">

          <Search
            className="absolute left-3 top-3 text-gray-500"
            size={18}
          />

          <input
            type="text"
            placeholder="Search case..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-white w-72 outline-none focus:border-cyan-500"
          />

        </div>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full text-sm">

          <thead>

            <tr className="border-b border-gray-700 text-gray-400">

              <th className="text-left py-3">Case ID</th>
              <th className="text-left py-3">Crime</th>
              <th className="text-left py-3">Location</th>
              <th className="text-left py-3">Officer</th>
              <th className="text-left py-3">Date</th>
              <th className="text-left py-3">Risk</th>
              <th className="text-left py-3">Status</th>
              <th className="text-left py-3">AI Score</th>

            </tr>

          </thead>

          <tbody>

            {filtered.map((item) => (

                <tr
                key={item.id}
                onClick={() => setSelectedCase(item)}
                className="border-b border-gray-800 hover:bg-gray-800 transition cursor-pointer"
                >

                <td className="py-4 font-semibold text-cyan-400">
                  {item.id}
                </td>

                <td className="text-white">
                  {item.crime}
                </td>

                <td className="text-gray-300">
                  {item.location}
                </td>

                <td className="text-gray-300">
                  {item.officer}
                </td>

                <td className="text-gray-400">
                  {item.date}
                </td>

                <td>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${riskColor(
                      item.risk
                    )}`}
                  >
                    {item.risk}
                  </span>

                </td>

                <td>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColor(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>

                </td>

                <td>

                  <div className="flex items-center gap-2">

                    {item.ai >= 90 ? (
                      <ShieldAlert
                        className="text-red-400"
                        size={18}
                      />
                    ) : (
                      <ShieldCheck
                        className="text-green-400"
                        size={18}
                      />
                    )}

                    <span className="text-white font-semibold">
                      {item.ai}%
                    </span>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      <div className="flex justify-between items-center mt-5 text-gray-400 text-sm">

        <span>
          Showing {filtered.length} Cases
        </span>

        <div className="flex items-center gap-2">

          <Clock3 size={16} />

          <span>
            Last Updated: Just Now
          </span>

        </div>

      </div>
      <CaseSummaryModal
      open={selectedCase !== null}
      caseData={selectedCase}
      onClose={() => setSelectedCase(null)}
      />
</div>
  );
}