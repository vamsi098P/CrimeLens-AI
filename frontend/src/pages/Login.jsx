import { useState } from "react";
import { Shield, User, Lock, AlertCircle } from "lucide-react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin123") {
      setError("");
      onLogin();
    } else {
      setError("Invalid Username or Password");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg,#020617,#0f172a,#1e293b)",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          width: "400px",
          background: "#1E293B",
          borderRadius: "20px",
          padding: "35px",
          boxShadow: "0 20px 40px rgba(0,0,0,.45)",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          <Shield size={65} color="#3B82F6" />

          <h1
            style={{
              color: "white",
              marginTop: "15px",
            }}
          >
            CrimeLens AI
          </h1>

          <p style={{ color: "#94A3B8" }}>
            Secure Crime Intelligence Platform
          </p>
        </div>

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: "18px" }}>
            <label style={{ color: "#CBD5E1" }}>
              Username
            </label>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                background: "#0F172A",
                borderRadius: "10px",
                marginTop: "8px",
                padding: "10px",
              }}
            >
              <User color="#3B82F6" />

              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                style={{
                  flex: 1,
                  marginLeft: "10px",
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  color: "white",
                }}
              />
            </div>
          </div>

          <div style={{ marginBottom: "18px" }}>
            <label style={{ color: "#CBD5E1" }}>
              Password
            </label>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                background: "#0F172A",
                borderRadius: "10px",
                marginTop: "8px",
                padding: "10px",
              }}
            >
              <Lock color="#3B82F6" />

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                style={{
                  flex: 1,
                  marginLeft: "10px",
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  color: "white",
                }}
              />
            </div>
          </div>

          {error && (
            <div
              style={{
                background: "#7F1D1D",
                color: "#FCA5A5",
                padding: "10px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                marginBottom: "15px",
              }}
            >
              <AlertCircle size={18} />
              <span style={{ marginLeft: "8px" }}>
                {error}
              </span>
            </div>
          )}

          <button
            style={{
              width: "100%",
              padding: "14px",
              background: "#2563EB",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontSize: "16px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Login
          </button>
        </form>

        <div
          style={{
            marginTop: "25px",
            textAlign: "center",
            color: "#94A3B8",
            fontSize: "14px",
          }}
        >
          
          <br />
          Username: <b>admin</b>
          <br />
          Password: <b>admin123</b>
        </div>
      </div>
    </div>
  );
}

export default Login;