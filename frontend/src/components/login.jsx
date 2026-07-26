import { useState } from "react";
import { Shield, Lock, User, AlertCircle } from "lucide-react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin123") {
      onLogin();
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">

      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-950 to-black"></div>

      <div className="relative bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl w-full max-w-md p-8">

        <div className="text-center">

          <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-5">
            <Shield size={40} className="text-white"/>
          </div>

          <h1 className="text-4xl font-bold text-white">
            CrimeLens AI
          </h1>

          <p className="text-slate-400 mt-2">
            AI Crime Analytics & Investigation Platform
          </p>
        </div>

        <form onSubmit={handleLogin} className="mt-8 space-y-5">

          <div>
            <label className="text-slate-300 text-sm">
              Username
            </label>

            <div className="flex items-center bg-slate-800 rounded-xl mt-2 px-3">
              <User className="text-slate-400"/>
              <input
                type="text"
                className="w-full bg-transparent outline-none text-white p-3"
                placeholder="Enter username"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
              />
            </div>
          </div>

          <div>

            <label className="text-slate-300 text-sm">
              Password
            </label>

            <div className="flex items-center bg-slate-800 rounded-xl mt-2 px-3">
              <Lock className="text-slate-400"/>
              <input
                type="password"
                className="w-full bg-transparent outline-none text-white p-3"
                placeholder="Enter password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>

          </div>

          {error && (
            <div className="bg-red-900/30 border border-red-600 rounded-lg p-3 text-red-300 flex items-center gap-2">
              <AlertCircle size={18}/>
              {error}
            </div>
          )}

          <button
            className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white font-semibold"
          >
            Login
          </button>

        </form>

        <div className="mt-8 bg-slate-800 rounded-xl p-4">

          <h3 className="text-white font-semibold mb-2">
            Demo Credentials
          </h3>

          <p className="text-slate-300">
            Username: <span className="text-blue-400">admin</span>
          </p>

          <p className="text-slate-300">
            Password: <span className="text-blue-400">admin123</span>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;