import React, { useEffect, useState } from "react";

export default function App() {
  const [msg, setMsg] = useState("loading...");
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL || "/api"}/api/hello`)
      .then((r) => r.json())
      .then((j) => setMsg(j.message || JSON.stringify(j)))
      .catch((e) => setMsg("error: " + e.message));
  }, []);
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", padding: 24 }}>
      <h1>Frontend (React)</h1>
      <p>Backend says: <strong>{msg}</strong></p>
    </div>
  );
}
