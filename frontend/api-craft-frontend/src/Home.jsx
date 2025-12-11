import React from "react";
import axios from "axios";

export default function Home() {
  const testBackend = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/health");
      alert(res.data);
    } catch (err) {
      alert("Failed to connect to backend: " + err.message);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-3">Welcome to API Craft</h1>
      <p className="mb-4">Lightweight API Testing & Mock Server — Day 1</p>
      <button className="btn btn-primary" onClick={testBackend}>
        Test Backend Connection
      </button>
    </div>
  );
}
