from httpx import AsyncClient
import pytest
from app import app

@pytest.mark.asyncio
async def test_hello():
    async with AsyncClient(app=app, base_url="http://test") as ac:
        r = await ac.get("/api/hello")
    assert r.status_code == 200
    assert "message" in r.json()
