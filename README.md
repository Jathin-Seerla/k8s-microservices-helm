# Kubernetes Microservices with Helm + GitHub Actions

A small demo project showing how to deploy two microservices (frontend + backend) to Kubernetes using a Helm chart and a GitHub Actions CI/CD pipeline.

## Tech stack
- Frontend: Node.js + Express
- Backend: Python + Flask
- Container registry: GitHub Container Registry (GHCR) by default
- Deployment: Helm chart
- CI: GitHub Actions

## Repo layout
(see tree in the project root)

## Quickstart (local using minikube / kind)
Prereqs:
- Docker
- kubectl
- helm
- minikube or kind
- GitHub CLI (optional)

### 1. Build images locally and push to registry (or use minikube's docker)
Example (GHCR):
```bash
# Tag names used in chart values
export OWNER=your-github-username
export TAG=localtest

docker build -t ghcr.io/$OWNER/k8s-ms-frontend:$TAG ./frontend
docker build -t ghcr.io/$OWNER/k8s-ms-backend:$TAG ./backend
docker push ghcr.io/$OWNER/k8s-ms-frontend:$TAG
docker push ghcr.io/$OWNER/k8s-ms-backend:$TAG
