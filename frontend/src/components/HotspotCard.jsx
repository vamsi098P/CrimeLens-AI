import { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
  useMap,
} from "react-leaflet";

function FixMap() {
  const map = useMap();

  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();
    }, 200);
  }, [map]);

  return null;
}

const crimeLocations = [
  {
    id: 1,
    place: "Koramangala",
    position: [12.9352, 77.6245],
    risk: "HIGH",
    color: "#ef4444",
    cases: 142,
    crime: "Robbery",
  },
  {
    id: 2,
    place: "Indiranagar",
    position: [12.9784, 77.6408],
    risk: "MEDIUM",
    color: "#f59e0b",
    cases: 89,
    crime: "Theft",
  },
  {
    id: 3,
    place: "Whitefield",
    position: [12.9698, 77.75],
    risk: "LOW",
    color: "#22c55e",
    cases: 34,
    crime: "Fraud",
  },
  {
    id: 4,
    place: "Electronic City",
    position: [12.8399, 77.677],
    risk: "HIGH",
    color: "#ef4444",
    cases: 110,
    crime: "Cyber Crime",
  },
];

function HotspotCard() {
  return (
    <div
      style={{
        background: "#1E293B",
        borderRadius: "15px",
        padding: "20px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
      }}
    >
      <h2
        style={{
          marginBottom: "15px",
          color: "#fff",
          fontSize: "22px",
        }}
      >
        📍 Crime Hotspot Map
      </h2>

      <MapContainer
        center={[12.9716, 77.5946]}
        zoom={11}
        style={{
          height: "350px",
          width: "100%",
          borderRadius: "12px",
        }}
      >
        <FixMap />

        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {crimeLocations.map((crime) => (
          <CircleMarker
            key={crime.id}
            center={crime.position}
            radius={12}
            pathOptions={{
              color: crime.color,
              fillColor: crime.color,
              fillOpacity: 0.9,
            }}
          >
            <Popup>
              <div style={{ minWidth: "180px" }}>
                <h3>{crime.place}</h3>

                <p>
                  <strong>Crime:</strong> {crime.crime}
                </p>

                <p>
                  <strong>Cases:</strong> {crime.cases}
                </p>

                <p>
                  <strong>Risk:</strong> {crime.risk}
                </p>
              </div>
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "20px",
          textAlign: "center",
          color: "white",
        }}
      >
        <div>
          <div
            style={{
              width: 15,
              height: 15,
              borderRadius: "50%",
              background: "#ef4444",
              margin: "auto",
            }}
          />
          <p>High Risk</p>
        </div>

        <div>
          <div
            style={{
              width: 15,
              height: 15,
              borderRadius: "50%",
              background: "#f59e0b",
              margin: "auto",
            }}
          />
          <p>Medium Risk</p>
        </div>

        <div>
          <div
            style={{
              width: 15,
              height: 15,
              borderRadius: "50%",
              background: "#22c55e",
              margin: "auto",
            }}
          />
          <p>Low Risk</p>
        </div>
      </div>
    </div>
  );
}

export default HotspotCard;