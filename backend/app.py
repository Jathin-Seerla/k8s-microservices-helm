from fastapi import FastAPI
import os
import redis.asyncio as aioredis

app = FastAPI(title="Backend Service")

REDIS_URL = os.getenv("REDIS_URL", "redis://redis:6379/0")
r = aioredis.from_url(REDIS_URL, decode_responses=True)

@app.on_event("startup")
async def startup():
    try:
        await r.ping()
    except Exception:
        # keep running; readiness probe will fail until redis is available
        pass

@app.get("/api/hello")
async def hello():
    await r.incr("hits")
    hits = await r.get("hits") or "0"
    return {"message": "Hello from backend (FastAPI)!", "hits": int(hits)}

@app.get("/health")
async def health():
    try:
        await r.ping()
        return {"status": "ok"}
    except Exception:
        return {"status": "degraded"}
