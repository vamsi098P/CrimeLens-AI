import { useMemo } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  MarkerType,
} from "reactflow";

const initialNodes = [
  {
    id: "1",
    position: { x: 250, y: 30 },
    data: { label: "👤 Gang Leader" },
    style: {
      background: "#dc2626",
      color: "#fff",
      borderRadius: 10,
      padding: 10,
      border: "2px solid #ef4444",
    },
  },
  {
    id: "2",
    position: { x: 80, y: 180 },
    data: { label: "👤 Suspect A" },
    style: {
      background: "#2563eb",
      color: "#fff",
      borderRadius: 10,
      padding: 10,
    },
  },
  {
    id: "3",
    position: { x: 250, y: 250 },
    data: { label: "👤 Suspect B" },
    style: {
      background: "#16a34a",
      color: "#fff",
      borderRadius: 10,
      padding: 10,
    },
  },
  {
    id: "4",
    position: { x: 430, y: 180 },
    data: { label: "👤 Suspect C" },
    style: {
      background: "#f59e0b",
      color: "#fff",
      borderRadius: 10,
      padding: 10,
    },
  },
  {
    id: "5",
    position: { x: 250, y: 390 },
    data: { label: "💰 Money Handler" },
    style: {
      background: "#7c3aed",
      color: "#fff",
      borderRadius: 10,
      padding: 10,
    },
  },
];

const initialEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e1-3",
    source: "1",
    target: "3",
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e1-4",
    source: "1",
    target: "4",
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e3-5",
    source: "3",
    target: "5",
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
];

function NetworkCard() {
  const nodes = useMemo(() => initialNodes, []);
  const edges = useMemo(() => initialEdges, []);

  return (
    <div
      style={{
        background: "#1E293B",
        borderRadius: 15,
        padding: 20,
        height: 520,
        boxShadow: "0 8px 25px rgba(0,0,0,0.35)",
      }}
    >
      <h2
        style={{
          color: "white",
          marginBottom: 15,
        }}
      >
        🕸 Criminal Network Analysis
      </h2>

      <div
        style={{
          height: 380,
          borderRadius: 12,
          overflow: "hidden",
          background: "#0F172A",
        }}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          fitView
          fitViewOptions={{ padding: 0.3 }}
        >
          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: 20,
          textAlign: "center",
        }}
      >
        <div>
          <h3 style={{ color: "#ef4444", margin: 0 }}>1</h3>
          <small style={{ color: "#cbd5e1" }}>Leader</small>
        </div>

        <div>
          <h3 style={{ color: "#3b82f6", margin: 0 }}>3</h3>
          <small style={{ color: "#cbd5e1" }}>Associates</small>
        </div>

        <div>
          <h3 style={{ color: "#22c55e", margin: 0 }}>4</h3>
          <small style={{ color: "#cbd5e1" }}>Connections</small>
        </div>

        <div>
          <h3 style={{ color: "#f59e0b", margin: 0 }}>HIGH</h3>
          <small style={{ color: "#cbd5e1" }}>Threat</small>
        </div>
      </div>
    </div>
  );
}

export default NetworkCard;