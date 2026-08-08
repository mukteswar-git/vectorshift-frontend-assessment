from typing import Any

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


app = FastAPI()


# Allow the React frontend to communicate with the FastAPI backend.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class PipelineRequest(BaseModel):
    nodes: list[dict[str, Any]]
    edges: list[dict[str, Any]]


@app.get("/")
def read_root():
    return {"Ping": "Pong"}


@app.post("/pipelines/parse")
def parse_pipeline(pipeline: PipelineRequest):
    nodes = pipeline.nodes
    edges = pipeline.edges

    num_nodes = len(nodes)
    num_edges = len(edges)

    # Create a set of node IDs.
    node_ids = {node["id"] for node in nodes}

    # Build adjacency list and indegree count.
    adjacency = {node_id: [] for node_id in node_ids}
    indegree = {node_id: 0 for node_id in node_ids}

    for edge in edges:
        source = edge.get("source")
        target = edge.get("target")

        if source in node_ids and target in node_ids:
            adjacency[source].append(target)
            indegree[target] += 1

    # Kahn's algorithm for detecting cycles.
    queue = [
        node_id
        for node_id in node_ids
        if indegree[node_id] == 0
    ]

    visited = 0

    while queue:
        current = queue.pop(0)
        visited += 1

        for neighbor in adjacency[current]:
            indegree[neighbor] -= 1

            if indegree[neighbor] == 0:
                queue.append(neighbor)

    is_dag = visited == num_nodes

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag,
    }