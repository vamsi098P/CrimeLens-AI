const API_URL = "http://127.0.0.1:8000";

export async function getStats() {
  const response = await fetch(`${API_URL}/stats`);
  return await response.json();
}

export async function askAI(message) {
  const response = await fetch(`${API_URL}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
    }),
  });

  return await response.json();
}