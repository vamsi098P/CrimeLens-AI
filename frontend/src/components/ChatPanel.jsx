import { useState } from "react";
import { askAI } from "../services/api";

function ChatPanel() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const quickQuestions = [
    "Show high-risk areas",
    "Summarize robbery cases",
    "Suggest police deployment",
    "Crime trend today",
  ];

  const handleAskAI = async () => {
    if (!message.trim()) {
      alert("Please enter a question.");
      return;
    }

    setLoading(true);

    try {
      const data = await askAI(message);
      setResponse(data);
    } catch (error) {
      console.error(error);
      alert("Failed to connect to AI backend.");
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        background: "#1E293B",
        padding: "25px",
        borderRadius: "16px",
        border: "1px solid #334155",
      }}
    >
      <h2
        style={{
          margin: 0,
          fontSize: "28px",
          fontWeight: "bold",
        }}
      >
        🤖 AI Investigation Assistant
      </h2>

      <p
        style={{
          color: "#94A3B8",
          marginTop: "8px",
          marginBottom: "20px",
        }}
      >
        Ask questions about crime trends, hotspots, suspects, investigation
        insights, and deployment recommendations.
      </p>

      {/* Quick Questions */}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        {quickQuestions.map((question) => (
          <button
            key={question}
            onClick={() => setMessage(question)}
            style={{
              background: "#334155",
              color: "white",
              border: "none",
              padding: "8px 15px",
              borderRadius: "20px",
              cursor: "pointer",
            }}
          >
            {question}
          </button>
        ))}
      </div>

      {/* Input */}

      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Example: Show robbery cases in Bengaluru"
        style={{
          width: "100%",
          padding: "15px",
          borderRadius: "10px",
          border: "1px solid #334155",
          outline: "none",
          fontSize: "16px",
          background: "#0F172A",
          color: "white",
          boxSizing: "border-box",
        }}
      />

      {/* Buttons */}

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          gap: "15px",
        }}
      >
        <button
          style={{
            padding: "12px 20px",
            background: "#2563EB",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          🎤 Voice
        </button>

        <button
          onClick={handleAskAI}
          style={{
            padding: "12px 20px",
            background: "#10B981",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          {loading ? "🧠 Analyzing..." : "🤖 Ask AI"}
        </button>
      </div>

      {/* Response */}

      <div
        style={{
          marginTop: "25px",
          background: "#0F172A",
          border: "1px solid #334155",
          padding: "20px",
          borderRadius: "12px",
          color: "white",
          minHeight: "220px",
        }}
      >
        {!response ? (
          <div
            style={{
              textAlign: "center",
              marginTop: "60px",
              color: "#94A3B8",
            }}
          >
            <h3>🤖 Awaiting Investigation Query</h3>

            <p>
              Ask the AI Assistant about crime trends, hotspots, suspects,
              patterns, or deployment strategies.
            </p>
          </div>
        ) : (
          <>
            <h2
              style={{
                color: "#38BDF8",
                marginTop: 0,
              }}
            >
              🚨 AI Investigation Report
            </h2>

            <hr
              style={{
                borderColor: "#334155",
                marginBottom: "20px",
              }}
            />

            <p>
              <strong>Query:</strong> {response.query}
            </p>

            <p>
              <strong>Crime Type:</strong> {response.crime_type}
            </p>

            <p>
              <strong>Cases Found:</strong> {response.cases_found}
            </p>

            <p>
              <strong>Crime Hotspot:</strong> {response.hotspot}
            </p>

            <p>
              <strong>Peak Time:</strong> {response.peak_time}
            </p>

            <p>
              <strong>Repeat Offenders:</strong>{" "}
              {response.repeat_offenders}
            </p>

            <p>
              <strong>Risk Score:</strong>{" "}
              <span
                style={{
                  color: "#EF4444",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                {response.risk_score}
              </span>
            </p>

            <h3
              style={{
                marginTop: "25px",
                color: "#22C55E",
              }}
            >
              📋 AI Recommendations
            </h3>

            <ul>
              {response.recommendation.map((item, index) => (
                <li
                  key={index}
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default ChatPanel;