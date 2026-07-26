from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="CrimeLens AI API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str


@app.get("/")
def home():
    return {"message": "CrimeLens AI Backend is Running 🚀"}


@app.get("/stats")
def stats():
    return {
        "total_cases": 12456,
        "active_cases": 2140,
        "high_risk": 341,
        "officers": 523
    }


@app.post("/chat")
def chat(request: ChatRequest):

    return {
        "query": request.message,
        "crime_type": "Robbery",
        "cases_found": 142,
        "hotspot": "Koramangala",
        "peak_time": "8 PM - 11 PM",
        "repeat_offenders": 8,
        "risk_score": "HIGH",
        "recommendation": [
            "Increase police patrols",
            "Deploy CCTV surveillance",
            "Monitor repeat offenders"
        ]
    }