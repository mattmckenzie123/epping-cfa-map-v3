
import { useState } from "react";

const stations = [
  { id: "truck", name: "Fire Truck Zone" },
  { id: "hose", name: "Hose Target Game" },
  { id: "gear", name: "Safety Gear Station" },
  { id: "sausage", name: "Sausage Sizzle" },
  { id: "rescue", name: "Rescue Display" },
  { id: "icecream", name: "Ice Cream Van" },
  { id: "pony", name: "Pony Rides" },
  { id: "kids", name: "Kids Colouring Corner" }
];

export default function SimpleMap() {
  const [visited, setVisited] = useState([]);

  const handleVisit = (id) => {
    if (!visited.includes(id)) {
      setVisited([...visited, id]);
    }
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ color: "darkred", textAlign: "center" }}>Epping CFA Open Day Map</h1>
      <p style={{ textAlign: "center" }}>Tap each station to explore!</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10, maxWidth: 500, margin: "0 auto" }}>
        {stations.map((station) => (
          <div
            key={station.id}
            onClick={() => handleVisit(station.id)}
            style={{
              padding: 20,
              backgroundColor: visited.includes(station.id) ? "lightgreen" : "#f2f2f2",
              border: "2px solid #ccc",
              borderRadius: 8,
              cursor: "pointer",
              textAlign: "center",
              transition: "0.3s"
            }}
          >
            <strong>{station.name}</strong>
            {visited.includes(station.id) && <p>✅ Visited</p>}
          </div>
        ))}
      </div>

      {visited.length === stations.length && (
        <div style={{ marginTop: 30, textAlign: "center" }}>
          <h2 style={{ color: "green" }}>🎉 You've visited all stations! 🎉</h2>
          <p>Show this screen to a CFA member to get your prize!</p>
        </div>
      )}
    </div>
  );
}
